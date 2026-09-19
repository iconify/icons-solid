import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gnte0vb9t.css';
import '../../css/j/jc5x3jbdt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gnte0vb9t"/><path class="jc5x3jbdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:paragliding"} {...others} />);
}

export default Component;

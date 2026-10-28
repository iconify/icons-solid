import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c95kemb1j.css';
import '../../css/j/jt6hb71em.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c95kemb1j"/><path class="jt6hb71em"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shuffle-off"} {...others} />);
}

export default Component;

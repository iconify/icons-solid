import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gd9n58n9r.css';
import '../../css/i/i1l-yek_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gd9n58n9r"/><path class="i1l-yek_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hand"} {...others} />);
}

export default Component;

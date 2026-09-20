import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-6z_vbkk.css';
import '../../css/w/wzwgf_62j.css';
import '../../css/i/iaho8hehc.css';

const viewBox = {"width":188.086,"height":50.041};
const content = `<g class="g-6z_vbkk"><path class="wzwgf_62j"/><path class="iaho8hehc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:hershey"} {...others} />);
}

export default Component;

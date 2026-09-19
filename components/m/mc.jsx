import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zxkj4zo0n.css';
import '../../css/b/bzb25fbpb.css';

const viewBox = {"width":301,"height":241};
const content = `<g class="ft5dv1b6b"><path class="zxkj4zo0n"/><path class="bzb25fbpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:mc"} {...others} />);
}

export default Component;

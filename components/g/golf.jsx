import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uoao2igld.css';
import '../../css/m/mr00v4b3c.css';
import '../../css/z/zbn6ce_hz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="uoao2igld wm-k"/><path class="mr00v4b3c wm-a"/><path class="zbn6ce_hz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:golf"} {...others} />);
}

export default Component;

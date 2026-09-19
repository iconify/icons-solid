import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sttfplz3g.css';
import '../../css/e/er0fxe3xc.css';
import '../../css/c/cnwloqb3t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sttfplz3g"/><path class="er0fxe3xc"/><path class="cnwloqb3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:filmframes"} {...others} />);
}

export default Component;

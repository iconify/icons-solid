import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sn4yg_1oe.css';
import '../../css/l/lsp0zwf3k.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="sn4yg_1oe"/><path class="lsp0zwf3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:ember"} {...others} />);
}

export default Component;

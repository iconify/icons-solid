import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0jc9qlwi.css';
import '../../css/e/edykgp0xs.css';
import '../../css/c/c3bf_ebrx.css';
import '../../css/v/vjimy6bso.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n0jc9qlwi"/><path class="edykgp0xs"/><path class="c3bf_ebrx"/><path class="vjimy6bso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-code-bold-duotone"} {...others} />);
}

export default Component;

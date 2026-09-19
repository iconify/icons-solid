import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0fcgjs6s.css';
import '../../css/c/cg7d2pfom.css';
import '../../css/r/r_d7t_bew.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r0fcgjs6s"/><circle class="cg7d2pfom"/><circle class="r_d7t_bew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-message-alt-dots"} {...others} />);
}

export default Component;

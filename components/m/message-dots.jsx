import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krn2xfzde.css';
import '../../css/c/cg7d2pfom.css';
import '../../css/r/r_d7t_bew.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="krn2xfzde"/><circle class="cg7d2pfom"/><circle class="r_d7t_bew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:message-dots"} {...others} />);
}

export default Component;

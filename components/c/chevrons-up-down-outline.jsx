import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftg7u_q6r.css';
import '../../css/c/ce_1shb3n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ftg7u_q6r"/><path class="ce_1shb3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-up-down-outline"} {...others} />);
}

export default Component;

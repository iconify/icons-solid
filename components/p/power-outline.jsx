import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aoj597b8y.css';
import '../../css/l/lb_j2db8n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aoj597b8y"/><path class="lb_j2db8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:power-outline"} {...others} />);
}

export default Component;

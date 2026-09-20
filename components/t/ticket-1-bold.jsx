import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ehnub9r-s.css';
import '../../css/s/sfd5q_aet.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ehnub9r-s"/><path class="sfd5q_aet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:ticket-1-bold"} {...others} />);
}

export default Component;

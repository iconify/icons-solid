import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wf0y5u_qd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wf0y5u_qd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:object-ungroup"} {...others} />);
}

export default Component;

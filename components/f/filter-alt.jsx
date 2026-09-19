import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjcn_pgnt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qjcn_pgnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:filter-alt"} {...others} />);
}

export default Component;

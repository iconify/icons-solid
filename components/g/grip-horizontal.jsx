import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-ha4xbsg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k-ha4xbsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:grip-horizontal"} {...others} />);
}

export default Component;

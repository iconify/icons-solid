import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vhr---bpz.css';
import '../../css/h/h_4f1111a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vhr---bpz"/><path class="h_4f1111a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:graph-24"} {...others} />);
}

export default Component;

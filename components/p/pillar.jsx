import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xke0zjbte.css';
import '../../css/i/itxo1tb3o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xke0zjbte"/><path class="itxo1tb3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:pillar"} {...others} />);
}

export default Component;

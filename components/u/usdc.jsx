import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/webk14bpk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="webk14bpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:usdc"} {...others} />);
}

export default Component;

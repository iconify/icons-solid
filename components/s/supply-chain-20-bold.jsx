import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gr0p-wb-a.css';
import '../../css/p/pp2amswub.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gr0p-wb-a"/><path class="pp2amswub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:supply-chain-20-bold"} {...others} />);
}

export default Component;

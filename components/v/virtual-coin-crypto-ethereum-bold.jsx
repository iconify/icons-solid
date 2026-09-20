import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-f93z-og.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g-f93z-og"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:virtual-coin-crypto-ethereum-bold"} {...others} />);
}

export default Component;

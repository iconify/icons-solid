import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/unxhts-yz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="unxhts-yz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:wallet-line"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a91z6102b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a91z6102b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:hospital-box-outline"} {...others} />);
}

export default Component;

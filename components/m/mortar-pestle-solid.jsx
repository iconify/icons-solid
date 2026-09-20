import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4f0s_zex.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p4f0s_zex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:mortar-pestle-solid"} {...others} />);
}

export default Component;

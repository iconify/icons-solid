import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncrn1j3qh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ncrn1j3qh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:xbox"} {...others} />);
}

export default Component;

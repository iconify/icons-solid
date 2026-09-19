import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nu3xopu2a.css';
import '../../css/k/kbs2nvbgh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nu3xopu2a"/><path class="kbs2nvbgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:washer"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkc4-e.css';
import '../../css/w/w3lddg.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-from-76.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nkc4-e"/><path class="w3lddg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:thumbs-up-filled"} {...others} />);
}

export default Component;

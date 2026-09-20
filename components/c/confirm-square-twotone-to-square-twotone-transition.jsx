import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6sxug.css';
import '../../css/i/iw1iew.css';
import '../../css/r/r3cp3p.css';
import '../../css/s/so-to-14.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i6sxug iw1iew"/><path class="iw1iew r3cp3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:confirm-square-twotone-to-square-twotone-transition"} {...others} />);
}

export default Component;

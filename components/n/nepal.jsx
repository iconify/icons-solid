import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmibc4bxr.css';
import '../../css/i/i5t49dnmi.css';
import '../../css/n/n-4-una-s.css';
import '../../css/c/cbjdd2zsr.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nmibc4bxr"/><path class="i5t49dnmi"/><path class="n-4-una-s"/><path class="cbjdd2zsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:nepal"} {...others} />);
}

export default Component;

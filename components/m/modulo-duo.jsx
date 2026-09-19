import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swiw1cbmg.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="swiw1cbmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:modulo-duo"} {...others} />);
}

export default Component;

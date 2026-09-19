import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/om8b7-bor.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="om8b7-bor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sleetlet-bold"} {...others} />);
}

export default Component;

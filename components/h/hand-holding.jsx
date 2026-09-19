import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohrg4zbtv.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="ohrg4zbtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:hand-holding"} {...others} />);
}

export default Component;

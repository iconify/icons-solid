import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/efbw3gbbv.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="efbw3gbbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:circle-half"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r694sh4sl.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="r694sh4sl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:buildings-bold"} {...others} />);
}

export default Component;

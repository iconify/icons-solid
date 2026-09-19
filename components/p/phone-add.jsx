import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcn-lacxq.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="wcn-lacxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:phone-add"} {...others} />);
}

export default Component;

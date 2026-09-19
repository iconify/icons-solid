import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhb5h3agu.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="rhb5h3agu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:trophy-outline"} {...others} />);
}

export default Component;

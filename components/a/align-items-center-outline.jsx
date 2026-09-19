import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gbmu9zd0n.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="gbmu9zd0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:align-items-center-outline"} {...others} />);
}

export default Component;

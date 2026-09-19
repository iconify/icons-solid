import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gz4fgyl6l.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="gz4fgyl6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-turn-outline"} {...others} />);
}

export default Component;

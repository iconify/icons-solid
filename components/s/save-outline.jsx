import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dqbvt3vys.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="dqbvt3vys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:save-outline"} {...others} />);
}

export default Component;

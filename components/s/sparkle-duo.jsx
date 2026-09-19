import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsvy08b5f.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="hsvy08b5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sparkle-duo"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uk-3pyb8k.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="uk-3pyb8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:badge-duo"} {...others} />);
}

export default Component;

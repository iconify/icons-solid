import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrw8ww-qi.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="yrw8ww-qi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:link-bold"} {...others} />);
}

export default Component;

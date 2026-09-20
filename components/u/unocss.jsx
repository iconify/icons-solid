import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkazv9b8k.css';
import '../../css/g/gkd-s96ca.css';
import '../../css/k/k7imll63p.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="jkazv9b8k"/><path class="gkd-s96ca"/><path class="k7imll63p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:unocss"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvcslwbbg.css';

const viewBox = {"width":33,"height":32};
const content = `<path clip-rule="evenodd" class="kvcslwbbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:docus-light"} {...others} />);
}

export default Component;

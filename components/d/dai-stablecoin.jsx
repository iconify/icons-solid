import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/non6l0bmz.css';
import '../../css/x/xo30ct2yo.css';

const viewBox = {"width":444.44,"height":444.44};
const content = `<path class="non6l0bmz"/><path class="xo30ct2yo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dai-stablecoin"} {...others} />);
}

export default Component;

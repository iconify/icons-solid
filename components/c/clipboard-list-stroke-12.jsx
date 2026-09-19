import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-fh5kbgy.css';
import '../../css/n/nw5k1bbvg.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="x-fh5kbgy"/><path class="nw5k1bbvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:clipboard-list-stroke-12"} {...others} />);
}

export default Component;

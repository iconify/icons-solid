import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vw2xo7ugk.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="vw2xo7ugk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:alpha"} {...others} />);
}

export default Component;

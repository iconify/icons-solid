import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qigmqebvl.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="qigmqebvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:shield-2-outline"} {...others} />);
}

export default Component;

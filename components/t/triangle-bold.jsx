import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvxu01krm.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="pvxu01krm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:triangle-bold"} {...others} />);
}

export default Component;

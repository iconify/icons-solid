import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9kcm970w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o9kcm970w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:draw-io-light"} {...others} />);
}

export default Component;

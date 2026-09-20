import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txy4kbrsi.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="txy4kbrsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:zoom-out"} {...others} />);
}

export default Component;

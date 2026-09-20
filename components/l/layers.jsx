import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ouz__9e9k.css';
import '../../css/c/ctz427bry.css';
import '../../css/v/vkt-pxbju.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ouz__9e9k"/><path class="ctz427bry"/><path class="vkt-pxbju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:layers"} {...others} />);
}

export default Component;

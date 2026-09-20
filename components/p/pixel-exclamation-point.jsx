import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ou2fv_0vq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ou2fv_0vq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pixel-exclamation-point"} {...others} />);
}

export default Component;

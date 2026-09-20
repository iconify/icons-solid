import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qe1f4abji.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qe1f4abji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:skateboard-deck"} {...others} />);
}

export default Component;

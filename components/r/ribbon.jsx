import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kaxfskgkh.css';

const viewBox = {"width":420,"height":850};
const content = `<path class="kaxfskgkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"il:ribbon"} {...others} />);
}

export default Component;

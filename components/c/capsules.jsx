import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvn-g69ct.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cvn-g69ct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:capsules"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z16tn7gsn.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="z16tn7gsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:skiptostart"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbf3x-bvc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kbf3x-bvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:lefthook-alt"} {...others} />);
}

export default Component;

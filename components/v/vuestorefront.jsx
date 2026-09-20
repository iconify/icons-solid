import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8nfwjaam.css';
import '../../css/v/vgzcqeb4l.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="k8nfwjaam"/><path class="vgzcqeb4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:vuestorefront"} {...others} />);
}

export default Component;

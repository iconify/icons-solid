import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtsz_ig2m.css';
import '../../css/c/cgvv3fb_p.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qtsz_ig2m"/><path class="cgvv3fb_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:research-bloch-sphere"} {...others} />);
}

export default Component;

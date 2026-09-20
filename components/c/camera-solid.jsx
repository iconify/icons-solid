import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4sh_ybhk.css';
import '../../css/z/zna4sbwyi.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="u4sh_ybhk"/><path clip-rule="evenodd" class="zna4sbwyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:camera-solid"} {...others} />);
}

export default Component;

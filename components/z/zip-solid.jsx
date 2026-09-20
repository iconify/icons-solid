import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bh7f1hoyt.css';
import '../../css/m/mmgfxwbmm.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bh7f1hoyt"/><path clip-rule="evenodd" class="mmgfxwbmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:zip-solid"} {...others} />);
}

export default Component;

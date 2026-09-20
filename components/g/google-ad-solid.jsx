import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcud33_8u.css';
import '../../css/c/cpy2d7b_t.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="vcud33_8u"/><path clip-rule="evenodd" class="cpy2d7b_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:google-ad-solid"} {...others} />);
}

export default Component;

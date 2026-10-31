import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-4cv_cxz.css';
import '../../css/v/v5r_03b1l.css';
import '../../css/r/rsodfxbti.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="h-4cv_cxz"/><path class="v5r_03b1l"/><path class="rsodfxbti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:cameroon"} {...others} />);
}

export default Component;

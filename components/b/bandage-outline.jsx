import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glmuf-bnw.css';
import '../../css/x/x6l88_bcz.css';
import '../../css/o/oy2wq8uic.css';
import '../../css/z/zujvlmw1b.css';
import '../../css/j/j7bkwkbef.css';
import '../../css/u/us_x7ntss.css';

const viewBox = {"width":512,"height":512};
const content = `<rect transform="rotate(-45 256 256.002)" class="glmuf-bnw"/><rect transform="rotate(45 257.409 254.582)" class="x6l88_bcz"/><circle class="oy2wq8uic"/><circle class="zujvlmw1b"/><circle class="j7bkwkbef"/><circle class="us_x7ntss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:bandage-outline"} {...others} />);
}

export default Component;

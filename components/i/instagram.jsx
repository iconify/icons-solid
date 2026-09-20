import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9zur0vky.css';
import '../../css/t/tqgdst6it.css';
import '../../css/d/dyv50c1zz.css';
import '../../css/e/e08bxfbeb.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z9zur0vky"/><path class="tqgdst6it"/><circle class="dyv50c1zz"/><circle class="e08bxfbeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:instagram"} {...others} />);
}

export default Component;

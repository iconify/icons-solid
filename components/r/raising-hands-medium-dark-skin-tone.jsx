import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9wzftb8q.css';
import '../../css/a/a11hv0l_f.css';
import '../../css/v/v2yh4c2xt.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="w9wzftb8q"/><path class="a11hv0l_f"/><path class="v2yh4c2xt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:raising-hands-medium-dark-skin-tone"} {...others} />);
}

export default Component;

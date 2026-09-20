import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2u1i6b4l.css';
import '../../css/h/h_pt1abna.css';
import '../../css/m/ma684bb2g.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="u2u1i6b4l"/><path class="h_pt1abna"/><path class="ma684bb2g"/><path class="e4zfowz9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:aries"} {...others} />);
}

export default Component;

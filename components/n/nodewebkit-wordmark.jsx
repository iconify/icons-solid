import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4l6qabrr.css';
import '../../css/c/cdpx8ey6f.css';
import '../../css/d/dq8rgqb1u.css';
import '../../css/p/pbu8ngp6t.css';
import '../../css/p/pp3o6m91q.css';
import '../../css/b/b9v447vvk.css';
import '../../css/m/mx90j9b_h.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="k4l6qabrr"/><path class="cdpx8ey6f"/><path class="dq8rgqb1u"/><path class="pbu8ngp6t"/><path class="pp3o6m91q"/><path class="b9v447vvk"/><path class="mx90j9b_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:nodewebkit-wordmark"} {...others} />);
}

export default Component;

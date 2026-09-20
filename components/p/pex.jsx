import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2cvywb3g.css';
import '../../css/x/x1i6yhgya.css';
import '../../css/k/k5gujvbth.css';
import '../../css/c/c1r-wtblo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f2cvywb3g"/><path clip-rule="evenodd" class="x1i6yhgya"/><path clip-rule="evenodd" class="k5gujvbth"/><path clip-rule="evenodd" class="c1r-wtblo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:pex"} {...others} />);
}

export default Component;

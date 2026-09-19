import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v16dgddoa.css';
import '../../css/y/y4nobsbrk.css';
import '../../css/z/ziavmd8sc.css';
import '../../css/k/kp1357raw.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="v16dgddoa"/><path class="y4nobsbrk"/><path class="ziavmd8sc"/><path class="kp1357raw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:radio-sharp"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at9237b-b.css';
import '../../css/t/t0f-scclc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="at9237b-b"/><path class="t0f-scclc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-subway"} {...others} />);
}

export default Component;

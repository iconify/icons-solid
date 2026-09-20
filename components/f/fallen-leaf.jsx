import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcdy3zbpl.css';
import '../../css/j/jd002rb2b.css';
import '../../css/p/pdau_gb4m.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="kcdy3zbpl"/><path class="jd002rb2b"/><path class="pdau_gb4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:fallen-leaf"} {...others} />);
}

export default Component;

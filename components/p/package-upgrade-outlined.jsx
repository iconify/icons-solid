import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewl61acth.css';
import '../../css/r/r58_0ub5s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ewl61acth"/><path class="r58_0ub5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:package-upgrade-outlined"} {...others} />);
}

export default Component;

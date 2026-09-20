import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wm84y2b2v.css';
import '../../css/e/esmuzmbhr.css';

const viewBox = {"width":96,"height":96};
const content = `<path class="wm84y2b2v"/><path class="esmuzmbhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:copilot-96"} {...others} />);
}

export default Component;

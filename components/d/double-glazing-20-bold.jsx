import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k86affo2a.css';
import '../../css/a/avn053b0m.css';
import '../../css/b/brp4g5bsj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k86affo2a"/><path class="avn053b0m"/><path class="brp4g5bsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:double-glazing-20-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbtvgabzb.css';
import '../../css/i/igsxkccpo.css';
import '../../css/l/lybvyzwhf.css';
import '../../css/v/vseb-gbvo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rbtvgabzb"/><path class="igsxkccpo"/><path class="lybvyzwhf"/><path class="vseb-gbvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:anchor-20"} {...others} />);
}

export default Component;

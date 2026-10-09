import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byr1kccnj.css';
import '../../css/v/v5yc14bmm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="byr1kccnj"/><path class="v5yc14bmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:inbox-48"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cze6f6b6k.css';
import '../../css/u/un6m0jq1u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cze6f6b6k"/><path class="un6m0jq1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:presentation-48-bold"} {...others} />);
}

export default Component;

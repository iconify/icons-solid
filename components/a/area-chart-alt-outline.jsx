import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqw06qb2h.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="cqw06qb2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:area-chart-alt-outline"} {...others} />);
}

export default Component;

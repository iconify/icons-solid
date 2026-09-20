import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlbuiq_zt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xlbuiq_zt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:triangle-right-outline"} {...others} />);
}

export default Component;

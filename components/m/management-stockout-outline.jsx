import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6_cw359x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r6_cw359x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:management-stockout-outline"} {...others} />);
}

export default Component;

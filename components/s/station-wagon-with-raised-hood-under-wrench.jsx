import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7am3obid.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="l7am3obid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:station-wagon-with-raised-hood-under-wrench"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/um3320xwy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="um3320xwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:distribution-outline"} {...others} />);
}

export default Component;

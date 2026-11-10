import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ju3_qt3um.css';
import '../../css/j/jlb1dbrgm.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ju3_qt3um"/><path class="jlb1dbrgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:stackit"} {...others} />);
}

export default Component;

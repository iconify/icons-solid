import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/both_jbwf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="both_jbwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:package-dependencies-16"} {...others} />);
}

export default Component;

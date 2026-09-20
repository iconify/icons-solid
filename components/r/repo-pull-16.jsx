import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tv25lc1is.css';
import '../../css/e/ewgywhc6x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tv25lc1is"/><path class="ewgywhc6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:repo-pull-16"} {...others} />);
}

export default Component;

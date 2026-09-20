import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4gl7ubxp.css';
import '../../css/m/m76ihyh3s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q4gl7ubxp"/><path class="m76ihyh3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:repo-delete-16"} {...others} />);
}

export default Component;

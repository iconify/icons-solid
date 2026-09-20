import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nn24bac4r.css';
import '../../css/x/xe3lk6bpi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nn24bac4r"/><path class="xe3lk6bpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:copilot-warning-16"} {...others} />);
}

export default Component;

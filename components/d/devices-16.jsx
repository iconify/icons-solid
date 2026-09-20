import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7degyn_m.css';
import '../../css/w/wt6yq6kuq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v7degyn_m"/><path class="wt6yq6kuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:devices-16"} {...others} />);
}

export default Component;

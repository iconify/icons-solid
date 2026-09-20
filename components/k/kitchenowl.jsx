import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bf24crklk.css';
import '../../css/y/yr2jp-bye.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bf24crklk"/><path class="yr2jp-bye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kitchenowl"} {...others} />);
}

export default Component;

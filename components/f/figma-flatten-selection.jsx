import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rj_6wwzvx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rj_6wwzvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:figma-flatten-selection"} {...others} />);
}

export default Component;

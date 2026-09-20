import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xolmzhbns.css';
import '../../css/x/xtenr_bwi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xolmzhbns"/><path class="xtenr_bwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-docs-open"} {...others} />);
}

export default Component;

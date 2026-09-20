import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r48oh6fou.css';
import '../../css/n/nwovjeb2e.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r48oh6fou"/><path class="nwovjeb2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-link-open"} {...others} />);
}

export default Component;

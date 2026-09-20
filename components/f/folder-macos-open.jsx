import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s27ky2-ij.css';
import '../../css/i/i2crm77yo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="s27ky2-ij"/><path class="i2crm77yo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-macos-open"} {...others} />);
}

export default Component;

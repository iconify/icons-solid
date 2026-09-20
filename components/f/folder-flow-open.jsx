import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s27ky2-ij.css';
import '../../css/g/gm4az_b0m.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="s27ky2-ij"/><path class="gm4az_b0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-flow-open"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmdn2ybsd.css';
import '../../css/r/rnvgnfbbf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pmdn2ybsd"/><path clip-rule="evenodd" class="rnvgnfbbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:file-text-16"} {...others} />);
}

export default Component;

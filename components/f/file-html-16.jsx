import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqxn57b_e.css';
import '../../css/r/rnvgnfbbf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kqxn57b_e"/><path clip-rule="evenodd" class="rnvgnfbbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:file-html-16"} {...others} />);
}

export default Component;

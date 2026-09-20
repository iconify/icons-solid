import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ralofz4_e.css';
import '../../css/k/ke769lv4w.css';

const viewBox = {"width":28,"height":28};
const content = `<path class="ralofz4_e"/><path class="ke769lv4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:gatsby"} {...others} />);
}

export default Component;

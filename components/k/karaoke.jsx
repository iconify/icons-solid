import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upa3gv_wk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="upa3gv_wk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:karaoke"} {...others} />);
}

export default Component;

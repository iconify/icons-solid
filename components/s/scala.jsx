import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxs9r3b1f.css';
import '../../css/r/rige9ccms.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zxs9r3b1f"/><path class="rige9ccms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:scala"} {...others} />);
}

export default Component;

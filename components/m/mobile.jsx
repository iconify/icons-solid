import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5ip8yb_e.css';

const viewBox = {"width":420,"height":810};
const content = `<path class="r5ip8yb_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"il:mobile"} {...others} />);
}

export default Component;

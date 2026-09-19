import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q36m0bb5w.css';
import '../../css/x/x84itwbxe.css';
import '../../css/o/otwfeac8c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="q36m0bb5w"/><path class="x84itwbxe"/><path class="otwfeac8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:tape-drive-line"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkz65tbzv.css';
import '../../css/b/bm74p9apf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gkz65tbzv"/><path class="bm74p9apf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:action-redo"} {...others} />);
}

export default Component;

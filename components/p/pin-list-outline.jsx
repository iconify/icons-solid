import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m76_9tmlz.css';
import '../../css/f/fi7kcnkgv.css';
import '../../css/b/b7o2pc7la.css';
import '../../css/f/f5nmdybij.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="m76_9tmlz"/><path class="fi7kcnkgv"/><path class="b7o2pc7la"/><path class="f5nmdybij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pin-list-outline"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi64kac_w.css';
import '../../css/s/sup9bkb8w.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bi64kac_w"/><path class="sup9bkb8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:climbing-frame"} {...others} />);
}

export default Component;

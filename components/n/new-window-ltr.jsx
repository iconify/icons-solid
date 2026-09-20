import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrm89iuuq.css';
import '../../css/k/k7rihbbue.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hrm89iuuq"/><path class="k7rihbbue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:new-window-ltr"} {...others} />);
}

export default Component;

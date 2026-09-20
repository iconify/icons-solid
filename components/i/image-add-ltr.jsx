import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrm89iuuq.css';
import '../../css/y/y0bmns4xv.css';
import '../../css/k/k79q3xboj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hrm89iuuq"/><path class="y0bmns4xv"/><circle class="k79q3xboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:image-add-ltr"} {...others} />);
}

export default Component;

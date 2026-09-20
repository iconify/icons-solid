import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gg42y0jtv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gg42y0jtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:table-move-column-after-ltr"} {...others} />);
}

export default Component;

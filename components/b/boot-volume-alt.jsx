import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x93jqtbel.css';
import '../../css/w/wk2d_zbto.css';
import '../../css/n/nc-ntg30u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="x93jqtbel"/><path class="wk2d_zbto"/><path class="nc-ntg30u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:boot-volume-alt"} {...others} />);
}

export default Component;

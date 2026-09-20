import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rk-vv_b6c.css';
import '../../css/d/d4i5-t89q.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rk-vv_b6c"/><path clip-rule="evenodd" class="d4i5-t89q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:spam-16"} {...others} />);
}

export default Component;

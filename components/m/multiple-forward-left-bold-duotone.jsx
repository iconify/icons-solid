import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2ybt1sxt.css';
import '../../css/s/st7xg9lhb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d2ybt1sxt"/><path clip-rule="evenodd" class="st7xg9lhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:multiple-forward-left-bold-duotone"} {...others} />);
}

export default Component;

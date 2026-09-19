import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w03tt64we.css';
import '../../css/g/gocezb5zs.css';
import '../../css/c/cv7o1ybwx.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="w03tt64we"/><path class="gocezb5zs"/><path class="cv7o1ybwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:whitesunsmallcloud"} {...others} />);
}

export default Component;

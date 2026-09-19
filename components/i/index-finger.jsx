import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/o/oyn5n5zpp.css';
import '../../css/v/vyisv67_x.css';
import '../../css/y/yy2g10ylv.css';
import '../../css/o/o7yly1bai.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="oyn5n5zpp"/><path class="vyisv67_x"/><path class="yy2g10ylv"/><path class="o7yly1bai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:index-finger"} {...others} />);
}

export default Component;

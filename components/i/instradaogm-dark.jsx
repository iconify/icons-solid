import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/af9mh_ibn.css';
import '../../css/m/mqohxr3by.css';
import '../../css/y/ysfe7ac7m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="af9mh_ibn"/><path class="mqohxr3by"/><path class="ysfe7ac7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:instradaogm-dark"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hy-8fjbld.css';
import '../../css/t/tuls07bzf.css';
import '../../css/m/m55y7wb9u.css';
import '../../css/w/w50iduokj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hy-8fjbld"/><path class="tuls07bzf"/><path class="m55y7wb9u"/><path class="w50iduokj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skirt-bold-duotone"} {...others} />);
}

export default Component;

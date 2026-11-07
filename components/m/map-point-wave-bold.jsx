import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzflwis8e.css';
import '../../css/a/a-jc6dbnm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zzflwis8e"/><path clip-rule="evenodd" class="a-jc6dbnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-point-wave-bold"} {...others} />);
}

export default Component;

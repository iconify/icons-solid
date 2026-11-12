import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-71aubjb.css';
import '../../css/v/vgdabt2oo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h-71aubjb"/><path class="vgdabt2oo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:readarr-radarr-light"} {...others} />);
}

export default Component;

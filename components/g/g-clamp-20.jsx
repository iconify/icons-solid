import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tydjinbpb.css';
import '../../css/h/hhk5ccb2m.css';
import '../../css/v/v9vk_uvpw.css';
import '../../css/k/ks180r2vl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tydjinbpb"/><path class="hhk5ccb2m"/><path class="v9vk_uvpw"/><path class="ks180r2vl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:g-clamp-20"} {...others} />);
}

export default Component;

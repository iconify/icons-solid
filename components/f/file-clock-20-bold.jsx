import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-ljzcb_h.css';
import '../../css/z/z2szi_geo.css';
import '../../css/d/d1xy-t7vc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s-ljzcb_h"/><path class="z2szi_geo"/><path class="d1xy-t7vc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-clock-20-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzaxycb1h.css';
import '../../css/w/wcn0uyb2b.css';
import '../../css/k/kl3kspb4p.css';
import '../../css/h/hu2xs9w1s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gzaxycb1h"/><path class="wcn0uyb2b"/><path class="kl3kspb4p"/><path class="hu2xs9w1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drill-press-20"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oibvcjc0f.css';
import '../../css/i/iu86r2nel.css';
import '../../css/l/livslo2ye.css';
import '../../css/k/kt6qteb_y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oibvcjc0f"/><path class="iu86r2nel"/><path class="livslo2ye"/><path class="kt6qteb_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tiny-tiny-rss-dark"} {...others} />);
}

export default Component;

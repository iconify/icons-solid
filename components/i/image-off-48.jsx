import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lc_5blf9f.css';
import '../../css/g/gl1l9lb4d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lc_5blf9f"/><path class="gl1l9lb4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:image-off-48"} {...others} />);
}

export default Component;

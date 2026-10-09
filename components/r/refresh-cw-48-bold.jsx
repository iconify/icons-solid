import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bz81stb1f.css';
import '../../css/o/o_l2ikyvi.css';
import '../../css/t/tz03pia3v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bz81stb1f"/><path class="o_l2ikyvi"/><path class="tz03pia3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:refresh-cw-48-bold"} {...others} />);
}

export default Component;

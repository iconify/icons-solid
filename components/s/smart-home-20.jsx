import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dz30y8b3r.css';
import '../../css/g/gtn82neio.css';
import '../../css/e/e3lx9cbyl.css';
import '../../css/j/jgfshtvfi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dz30y8b3r"/><path class="gtn82neio"/><path class="e3lx9cbyl"/><path class="jgfshtvfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-home-20"} {...others} />);
}

export default Component;

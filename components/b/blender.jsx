import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zbpxjcbvi.css';
import '../../css/g/gpd_jwbqe.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="zbpxjcbvi"/><path class="gpd_jwbqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:blender"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgxzlab4g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kgxzlab4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:creative-commons"} {...others} />);
}

export default Component;

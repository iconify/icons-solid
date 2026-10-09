import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azix1pzje.css';
import '../../css/a/ajjz77quj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="azix1pzje"/><path class="ajjz77quj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pencil-20"} {...others} />);
}

export default Component;

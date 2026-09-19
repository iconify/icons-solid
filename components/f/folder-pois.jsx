import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9b_kub7q.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="p9b_kub7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:folder-pois"} {...others} />);
}

export default Component;

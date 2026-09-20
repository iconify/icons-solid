import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/a65jy6b-i.css';
import '../../css/u/u_66ieb2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><rect class="a65jy6b-i"/><path class="u_66ieb2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:album"} {...others} />);
}

export default Component;

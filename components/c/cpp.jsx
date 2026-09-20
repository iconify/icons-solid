import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dwpiq9ban.css';
import '../../css/a/a139p7rye.css';
import '../../css/n/nz0lp3ozz.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="dwpiq9ban"/><path class="a139p7rye"/><path class="nz0lp3ozz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:cpp"} {...others} />);
}

export default Component;

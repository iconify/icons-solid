import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-w_jtvez.css';
import '../../css/z/z0u0mzbcw.css';
import '../../css/c/cn7q8feaf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u-w_jtvez"/><path class="z0u0mzbcw"/><path class="cn7q8feaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-search-20"} {...others} />);
}

export default Component;

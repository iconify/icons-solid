import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zevx3_zmp.css';
import '../../css/a/anynp2b3h.css';
import '../../css/c/cn7q8feaf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zevx3_zmp"/><path class="anynp2b3h"/><path class="cn7q8feaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-search-20"} {...others} />);
}

export default Component;

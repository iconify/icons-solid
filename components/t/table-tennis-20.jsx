import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7tbn3bau.css';
import '../../css/u/uc95oo_ln.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g7tbn3bau"/><path class="uc95oo_ln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:table-tennis-20"} {...others} />);
}

export default Component;

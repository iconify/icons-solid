import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6epwbbxl.css';
import '../../css/f/f92h2vb9i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m6epwbbxl"/><path class="f92h2vb9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:biochar-20"} {...others} />);
}

export default Component;

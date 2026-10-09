import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6j5_ubif.css';
import '../../css/d/dpee-7beg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o6j5_ubif"/><path class="dpee-7beg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grass-48-bold"} {...others} />);
}

export default Component;

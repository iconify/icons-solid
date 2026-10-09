import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjsgojboe.css';
import '../../css/f/f11gmybah.css';
import '../../css/v/vy8ukubtk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sjsgojboe"/><path class="f11gmybah"/><path class="vy8ukubtk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-low-48-bold"} {...others} />);
}

export default Component;

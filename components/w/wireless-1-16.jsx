import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uevmlbz-z.css';
import '../../css/s/swaugsbnu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="uevmlbz-z"/><path class="swaugsbnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:wireless-1-16"} {...others} />);
}

export default Component;

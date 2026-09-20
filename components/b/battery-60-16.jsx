import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6c2rnb4s.css';
import '../../css/f/ffaginb4b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k6c2rnb4s"/><path clip-rule="evenodd" class="ffaginb4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:battery-60-16"} {...others} />);
}

export default Component;

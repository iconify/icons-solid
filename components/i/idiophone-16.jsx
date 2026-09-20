import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbwe7mc1r.css';
import '../../css/k/kj3l2zbgf.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="fbwe7mc1r"/><path class="kj3l2zbgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:idiophone-16"} {...others} />);
}

export default Component;

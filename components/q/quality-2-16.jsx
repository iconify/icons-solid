import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slpwxxgtw.css';
import '../../css/k/kpriymdxa.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="slpwxxgtw"/><path class="kpriymdxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:quality-2-16"} {...others} />);
}

export default Component;

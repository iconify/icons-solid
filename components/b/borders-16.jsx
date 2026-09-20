import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qndn4-bth.css';
import '../../css/j/jodh5db0p.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="qndn4-bth"/><path clip-rule="evenodd" class="jodh5db0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:borders-16"} {...others} />);
}

export default Component;

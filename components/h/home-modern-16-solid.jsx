import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqet3pb0p.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yqet3pb0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:home-modern-16-solid"} {...others} />);
}

export default Component;

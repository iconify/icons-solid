import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avrw6g-oj.css';
import '../../css/u/udo50kb5b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="avrw6g-oj"/><path class="udo50kb5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nonicons:c-16"} {...others} />);
}

export default Component;

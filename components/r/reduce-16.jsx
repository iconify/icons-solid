import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lv5ee7d2i.css';
import '../../css/j/jdm0z2b0t.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lv5ee7d2i"/><path class="jdm0z2b0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:reduce-16"} {...others} />);
}

export default Component;

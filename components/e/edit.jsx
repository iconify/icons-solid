import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh821mhzp.css';
import '../../css/k/kidrbbcux.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zh821mhzp"/><path class="kidrbbcux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:edit"} {...others} />);
}

export default Component;

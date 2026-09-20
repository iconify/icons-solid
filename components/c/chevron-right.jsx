import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v31zzfo0l.css';

const viewBox = {"width":8,"height":16};
const content = `<path class="v31zzfo0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:chevron-right"} {...others} />);
}

export default Component;

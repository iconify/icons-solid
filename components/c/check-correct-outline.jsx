import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sn62dvbtd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="sn62dvbtd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:check-correct-outline"} {...others} />);
}

export default Component;

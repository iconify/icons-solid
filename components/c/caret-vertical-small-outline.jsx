import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kh_sqt51j.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="kh_sqt51j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:caret-vertical-small-outline"} {...others} />);
}

export default Component;

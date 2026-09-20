import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xmy-ii47q.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xmy-ii47q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:wifi-abnormal-outline"} {...others} />);
}

export default Component;

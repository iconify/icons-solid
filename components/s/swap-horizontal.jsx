import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yc3lltj-i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yc3lltj-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:swap-horizontal"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yksjou5qt.css';

const viewBox = {"width":13,"height":16};
const content = `<path class="yksjou5qt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:list-ordered"} {...others} />);
}

export default Component;

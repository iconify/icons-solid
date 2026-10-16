import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6o3ktbcu.css';
import '../../css/w/wjyxzxbul.css';
import '../../css/y/yj4lhpb4g.css';

const viewBox = {"width":1028,"height":254};
const content = `<path class="x6o3ktbcu"/><path class="wjyxzxbul"/><path class="yj4lhpb4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:whoogle-search"} {...others} />);
}

export default Component;

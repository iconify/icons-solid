import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1k2lkb5q.css';

const viewBox = {"width":30,"height":30};
const content = `<path clip-rule="evenodd" class="y1k2lkb5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:rallly"} {...others} />);
}

export default Component;

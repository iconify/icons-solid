import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zr8ocvcld.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zr8ocvcld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:file-search-corner-line"} {...others} />);
}

export default Component;

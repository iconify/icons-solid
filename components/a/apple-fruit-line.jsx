import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zc35mgb4o.css';
import '../../css/y/y2opnv8ug.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zc35mgb4o"/><path class="y2opnv8ug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:apple-fruit-line"} {...others} />);
}

export default Component;

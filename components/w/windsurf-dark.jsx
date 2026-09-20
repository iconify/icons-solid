import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzip_vo3j.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="zzip_vo3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:windsurf-dark"} {...others} />);
}

export default Component;

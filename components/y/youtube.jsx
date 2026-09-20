import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b16bxbgpf.css';
import '../../css/y/yyxdkxbnm.css';

const viewBox = {"width":256,"height":180};
const content = `<path class="b16bxbgpf"/><path class="yyxdkxbnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:youtube"} {...others} />);
}

export default Component;

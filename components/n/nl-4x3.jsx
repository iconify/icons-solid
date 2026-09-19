import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lc3doybli.css';
import '../../css/v/v18c9fbau.css';
import '../../css/z/zzkm3r1nw.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="lc3doybli"/><path class="v18c9fbau"/><path class="zzkm3r1nw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:nl-4x3"} {...others} />);
}

export default Component;

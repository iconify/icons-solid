import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zpqjhyevn.css';
import '../../css/i/i5eb24tdq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zpqjhyevn"/><path class="i5eb24tdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:logo-cc"} {...others} />);
}

export default Component;

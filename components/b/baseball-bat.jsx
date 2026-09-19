import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1yx7eixm.css';
import '../../css/z/zrcrh4bnb.css';
import '../../css/j/jxmh2ibtp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="p1yx7eixm"><circle class="zrcrh4bnb"/><path class="jxmh2ibtp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:baseball-bat"} {...others} />);
}

export default Component;

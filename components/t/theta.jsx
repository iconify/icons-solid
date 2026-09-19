import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z0b972boe.css';
import '../../css/g/g6-7i-bgk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="z0b972boe"/><path class="g6-7i-bgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:theta"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z61wt6vzm.css';
import '../../css/j/jz7sqkbtw.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="z61wt6vzm"/><path class="jz7sqkbtw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:zrx"} {...others} />);
}

export default Component;

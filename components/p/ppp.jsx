import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qo-of5usx.css';
import '../../css/r/rhse0sbxl.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="qo-of5usx"/><path class="rhse0sbxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ppp"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pcj17wbop.css';
import '../../css/c/cdetnwb_d.css';
import '../../css/p/pqpmhlj9m.css';
import '../../css/k/kayvr8bla.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pcj17wbop"/><path class="cdetnwb_d"/><path class="pqpmhlj9m"/><path class="kayvr8bla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bug-virus-document"} {...others} />);
}

export default Component;

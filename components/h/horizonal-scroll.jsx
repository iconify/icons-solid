import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/r/rufnrabwk.css';
import '../../css/x/x8vqyba_e.css';
import '../../css/w/w-qsszzgh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path clip-rule="evenodd" class="rufnrabwk"/><path class="x8vqyba_e"/><path clip-rule="evenodd" class="w-qsszzgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:horizonal-scroll"} {...others} />);
}

export default Component;

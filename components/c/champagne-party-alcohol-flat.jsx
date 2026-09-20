import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aq71-lrxa.css';
import '../../css/n/n91xa473e.css';
import '../../css/v/vo58e954h.css';
import '../../css/b/b14rjtbws.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="aq71-lrxa"/><path clip-rule="evenodd" class="n91xa473e"/><path clip-rule="evenodd" class="vo58e954h"/><path clip-rule="evenodd" class="b14rjtbws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:champagne-party-alcohol-flat"} {...others} />);
}

export default Component;

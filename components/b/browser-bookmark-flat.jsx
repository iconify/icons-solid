import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qydvr2bqn.css';
import '../../css/a/ah2k4mbak.css';
import '../../css/g/gem3los5o.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qydvr2bqn"/><path clip-rule="evenodd" class="ah2k4mbak"/><path class="gem3los5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:browser-bookmark-flat"} {...others} />);
}

export default Component;

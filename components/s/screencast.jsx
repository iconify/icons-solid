import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/edmy10b6v.css';
import '../../css/f/f0zhtgbge.css';
import '../../css/a/aeer8-hxy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="edmy10b6v"/><path class="f0zhtgbge"/><path class="aeer8-hxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:screencast"} {...others} />);
}

export default Component;

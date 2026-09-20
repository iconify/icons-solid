import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ap7xfoihm.css';
import '../../css/w/wkz8iolpx.css';
import '../../css/i/in9lr_b9l.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ap7xfoihm"/><path clip-rule="evenodd" class="wkz8iolpx"/><path class="in9lr_b9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:esports-flat"} {...others} />);
}

export default Component;

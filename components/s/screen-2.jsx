import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/x/xnegumbjx.css';
import '../../css/v/vdy_02tyl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="xnegumbjx"/><path class="vdy_02tyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:screen-2"} {...others} />);
}

export default Component;

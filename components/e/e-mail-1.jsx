import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mduiahbmo.css';
import '../../css/d/dk-c4yjtp.css';
import '../../css/o/o2ayd2boy.css';
import '../../css/t/tolttpogx.css';
import '../../css/r/rl9y33bwp.css';
import '../../css/w/w7c9bzb2z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mduiahbmo"/><path class="dk-c4yjtp"/><path class="o2ayd2boy"/><path class="tolttpogx"/><path class="rl9y33bwp"/><path class="w7c9bzb2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:e-mail-1"} {...others} />);
}

export default Component;

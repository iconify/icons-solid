import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bscn-pouw.css';
import '../../css/t/t4me48e0z.css';
import '../../css/h/hl7g70bic.css';
import '../../css/i/ikexmmb-s.css';
import '../../css/j/jz3y7bv2o.css';
import '../../css/n/nlet3w_-h.css';
import '../../css/s/s21gmb9sg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bscn-pouw"/><path class="t4me48e0z"/><path class="hl7g70bic"/><path class="ikexmmb-s"/><path class="jz3y7bv2o"/><path class="nlet3w_-h"/><path class="s21gmb9sg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:japanese-symbol-for-beginner"} {...others} />);
}

export default Component;

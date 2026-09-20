import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7w-yxbfh.css';
import '../../css/h/hd2ow-b4i.css';
import '../../css/e/eyq3twboc.css';
import '../../css/j/jukwtkb4y.css';
import '../../css/i/igrhcakgh.css';
import '../../css/d/d-9m5hbbb.css';
import '../../css/x/x97kawbtm.css';
import '../../css/k/kt4_qzbmc.css';
import '../../css/a/aqettkbqg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z7w-yxbfh"/><path class="hd2ow-b4i"/><path class="eyq3twboc"/><path class="jukwtkb4y"/><path class="igrhcakgh"/><path class="d-9m5hbbb"/><path class="x97kawbtm"/><path class="kt4_qzbmc"/><path class="aqettkbqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:revolving-hearts"} {...others} />);
}

export default Component;

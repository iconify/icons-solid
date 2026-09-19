import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r22z3_ibn.css';
import '../../css/j/j_c7l9bgy.css';
import '../../css/i/ifiuanb4l.css';
import '../../css/y/ygo867n0h.css';
import '../../css/f/f6p4irbch.css';
import '../../css/r/rukvxnbpc.css';
import '../../css/w/ws9e2c_xx.css';
import '../../css/v/vmoeqzbus.css';
import '../../css/d/dc591cb7e.css';
import '../../css/h/hv00xib9h.css';
import '../../css/d/djqdzm8yr.css';
import '../../css/z/zkx--cx0g.css';
import '../../css/s/sgh9k7bui.css';
import '../../css/t/tzjb7jkrb.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="r22z3_ibn"/><path class="j_c7l9bgy"/><path class="ifiuanb4l"/><path class="ygo867n0h"/><path class="f6p4irbch"/><path class="rukvxnbpc"/><path class="ws9e2c_xx"/><path class="vmoeqzbus"/><path class="dc591cb7e"/><path class="hv00xib9h"/><path class="djqdzm8yr"/><path class="zkx--cx0g"/><path class="sgh9k7bui"/><path class="tzjb7jkrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:vitess-wordmark"} {...others} />);
}

export default Component;

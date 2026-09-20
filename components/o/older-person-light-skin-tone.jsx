import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvn_rxb6v.css';
import '../../css/e/eyg7-wf7e.css';
import '../../css/v/v8gof5jri.css';
import '../../css/t/tz-ydab7t.css';
import '../../css/m/m2zr24brs.css';
import '../../css/d/d7amhlj7r.css';
import '../../css/b/bwi1ebl6k.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hvn_rxb6v"/><path class="eyg7-wf7e"/><path class="v8gof5jri"/><path class="tz-ydab7t"/><path class="m2zr24brs"/><path class="d7amhlj7r"/><path class="bwi1ebl6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:older-person-light-skin-tone"} {...others} />);
}

export default Component;

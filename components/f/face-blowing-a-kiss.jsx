import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6iikjgcv.css';
import '../../css/w/wofnodbau.css';
import '../../css/n/njoq97b2l.css';
import '../../css/w/wc91oacdk.css';
import '../../css/b/b2kgvgb9h.css';
import '../../css/h/hd9155bvx.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="s6iikjgcv"/><path class="wofnodbau"/><path class="njoq97b2l"/><path class="wc91oacdk"/><circle class="b2kgvgb9h"/><path class="hd9155bvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:face-blowing-a-kiss"} {...others} />);
}

export default Component;

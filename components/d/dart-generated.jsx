import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0ln5gbto.css';
import '../../css/j/j6_v_uqiy.css';
import '../../css/y/yfocpm83q.css';
import '../../css/x/xjcj_hb3x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="w0ln5gbto"/><path class="j6_v_uqiy"/><path class="yfocpm83q"/><path class="xjcj_hb3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:dart-generated"} {...others} />);
}

export default Component;

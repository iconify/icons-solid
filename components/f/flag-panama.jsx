import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/t/tic4w_4kd.css';
import '../../css/x/xcezv92mw.css';
import '../../css/f/fl4499wyq.css';
import '../../css/z/zr-s8dcqt.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><path class="tic4w_4kd"/><path class="xcezv92mw"/><path class="fl4499wyq"/><path class="zr-s8dcqt"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-panama"} {...others} />);
}

export default Component;

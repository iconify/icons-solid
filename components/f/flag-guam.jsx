import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/codjm1acu.css';
import '../../css/m/mejx6bbii.css';
import '../../css/d/dftndj4ud.css';
import '../../css/a/aqrbs17mq.css';
import '../../css/z/zqb6y9b8f.css';
import '../../css/a/a1m3ykbot.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="codjm1acu"/><path class="mejx6bbii"/><path class="dftndj4ud"/><path class="aqrbs17mq"/><path class="zqb6y9b8f"/><path class="a1m3ykbot"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-guam"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj4kgr0on.css';
import '../../css/a/aqy_ylbdw.css';
import '../../css/r/r--go88jm.css';
import '../../css/j/jxsqz9b-j.css';
import '../../css/r/r85psb14m.css';
import '../../css/t/t2fa2el1e.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="wj4kgr0on"><path class="aqy_ylbdw"/><path class="r--go88jm"/><path class="jxsqz9b-j"/><path class="r85psb14m"/></g><path class="t2fa2el1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:lime"} {...others} />);
}

export default Component;

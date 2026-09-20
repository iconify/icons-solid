import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mx0ewsb4i.css';
import '../../css/t/t94t6tb6s.css';
import '../../css/r/rxtnv1b8t.css';
import '../../css/j/jcuabtghe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="mx0ewsb4i"/><path class="t94t6tb6s"/><path class="rxtnv1b8t"/><path class="jcuabtghe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:cam-web-light"} {...others} />);
}

export default Component;

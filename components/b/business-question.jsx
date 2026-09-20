import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xh2gcibwj.css';
import '../../css/a/arth0nbvw.css';
import '../../css/p/pn80nsbvq.css';
import '../../css/w/wz6-a6xcs.css';
import '../../css/g/gir47ccbc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xh2gcibwj"/><path class="arth0nbvw"/><path class="pn80nsbvq"/><path class="wz6-a6xcs"/><path class="gir47ccbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:business-question"} {...others} />);
}

export default Component;

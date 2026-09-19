import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uj2u_c8xe.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/x/xln0-bxve.css';
import '../../css/h/hoffup77e.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="uj2u_c8xe"/><g class="n1mjunbsu"><path class="xln0-bxve"/><path class="hoffup77e"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:pink"} {...others} />);
}

export default Component;

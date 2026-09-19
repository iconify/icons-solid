import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/x/xwwi3buwt.css';
import '../../css/x/xg_7u0-or.css';
import '../../css/o/o0gvmjbgi.css';
import '../../css/e/en4ykbb1m.css';
import '../../css/t/tt7bx8hmh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="xwwi3buwt"/><path class="xg_7u0-or"/><path class="o0gvmjbgi"/><path class="en4ykbb1m"/><path class="tt7bx8hmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cocktail"} {...others} />);
}

export default Component;

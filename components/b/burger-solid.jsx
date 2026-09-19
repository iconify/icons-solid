import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qs96w4bbe.css';
import '../../css/e/eh36yibok.css';
import '../../css/o/ohgkzfgww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qs96w4bbe"/><path class="eh36yibok"/><path class="ohgkzfgww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:burger-solid"} {...others} />);
}

export default Component;

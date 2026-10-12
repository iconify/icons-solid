import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jxyebobhy.css';
import '../../css/j/jjfrf9x3x.css';
import '../../css/b/bmlydqbmd.css';
import '../../css/l/l7ocqgb5a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jxyebobhy"/><path class="jjfrf9x3x"/><path class="bmlydqbmd"/><path class="l7ocqgb5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:package-check-duotone"} {...others} />);
}

export default Component;

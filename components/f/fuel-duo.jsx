import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fud6_84po.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/edaww7brc.css';
import '../../css/r/rsm9oqubb.css';
import '../../css/t/tpaohmzto.css';
import '../../css/m/mkbjaojxf.css';
import '../../css/m/mlkolobon.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fud6_84po secondary"/><g class="dt0cm9dhy primary"><path class="edaww7brc"/><path class="rsm9oqubb"/><path class="tpaohmzto"/><path class="mkbjaojxf"/><path class="mlkolobon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:fuel-duo"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t35y8l_oe.css';
import '../../css/e/eayms5glv.css';
import '../../css/a/ak91a16sz.css';
import '../../css/j/jx3_n8bgt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t35y8l_oe"/><path class="eayms5glv"/><path class="ak91a16sz"/><path class="jx3_n8bgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:greenhouse-effect-48-bold"} {...others} />);
}

export default Component;

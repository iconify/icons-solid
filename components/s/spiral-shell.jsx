import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/er2m47bqi.css';
import '../../css/u/uxtmlr4ia.css';
import '../../css/x/xcs724b7k.css';
import '../../css/j/jvho-acgb.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="er2m47bqi"/><path class="uxtmlr4ia"/><path class="xcs724b7k"/><path class="jvho-acgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:spiral-shell"} {...others} />);
}

export default Component;

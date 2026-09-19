import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i1rzm9bmd.css';
import '../../css/m/mb6af_bet.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="i1rzm9bmd"/><path class="mb6af_bet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:husd"} {...others} />);
}

export default Component;

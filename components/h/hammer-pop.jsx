import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eoxy6acbr.css';
import '../../css/u/ulb1r2b4u.css';
import '../../css/f/fw7hhqbnz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="eoxy6acbr"/><path class="ulb1r2b4u"/><path class="fw7hhqbnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:hammer-pop"} {...others} />);
}

export default Component;

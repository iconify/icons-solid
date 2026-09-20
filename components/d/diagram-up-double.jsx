import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmo9ppb1i.css';
import '../../css/r/rwyjbx_4g.css';
import '../../css/e/ebolgtb4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="lmo9ppb1i"><path class="rwyjbx_4g"/><path class="ebolgtb4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:diagram-up-double"} {...others} />);
}

export default Component;

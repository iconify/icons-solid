import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vh7avqmdc.css';
import '../../css/o/ouv_s_bld.css';
import '../../css/e/ekkzpbcrm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vh7avqmdc"/><path class="ouv_s_bld"/><path class="ekkzpbcrm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:envelopes-filled"} {...others} />);
}

export default Component;

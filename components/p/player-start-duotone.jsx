import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9t5albup.css';
import '../../css/e/e1dpcubfa.css';
import '../../css/d/dw8rv-b5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g9t5albup"/><path class="e1dpcubfa"/><path class="dw8rv-b5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:player-start-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnnap8b4p.css';
import '../../css/y/yyj7-pbhc.css';
import '../../css/x/x1x48ac7h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hnnap8b4p"/><path class="yyj7-pbhc"/><path class="x1x48ac7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:maxxair-fan-delux-closed"} {...others} />);
}

export default Component;

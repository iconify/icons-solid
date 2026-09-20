import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amewfsb1m.css';
import '../../css/q/qjh4aybzr.css';
import '../../css/t/tcqd81b4h.css';
import '../../css/f/fy2tp5b5h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="amewfsb1m"/><path class="qjh4aybzr"/><path class="tcqd81b4h"/><path class="fy2tp5b5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:social-distancing"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/h/h63kkxb3c.css';
import '../../css/p/pz6f_ubsp.css';
import '../../css/p/powe2c5ch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="h63kkxb3c"/><path class="pz6f_ubsp"/><path class="powe2c5ch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:add-background"} {...others} />);
}

export default Component;

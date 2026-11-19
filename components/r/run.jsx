import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qmc15ze4c.css';
import '../../css/h/ht3luwbyh.css';
import '../../css/t/tl8fzcbza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="qmc15ze4c"/><circle class="ht3luwbyh"/><path class="tl8fzcbza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:run"} {...others} />);
}

export default Component;

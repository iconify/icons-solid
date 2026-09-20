import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qd3h75bsl.css';
import '../../css/v/vfdg0hblc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qd3h75bsl"/><path class="vfdg0hblc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:sun-moon"} {...others} />);
}

export default Component;

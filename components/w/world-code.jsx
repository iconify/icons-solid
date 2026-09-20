import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qbew2zmiw.css';
import '../../css/v/vl2mitbaf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qbew2zmiw"/><path class="vl2mitbaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world-code"} {...others} />);
}

export default Component;

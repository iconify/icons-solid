import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cppj21beo.css';
import '../../css/u/uad_txtxg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cppj21beo"/><path class="uad_txtxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:gas-station-pin"} {...others} />);
}

export default Component;

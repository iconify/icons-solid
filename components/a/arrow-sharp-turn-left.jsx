import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y5_z21baa.css';
import '../../css/g/gomqi0iza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y5_z21baa"/><path class="gomqi0iza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-sharp-turn-left"} {...others} />);
}

export default Component;

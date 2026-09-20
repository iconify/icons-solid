import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tfpkjvbpk.css';
import '../../css/o/okas3_bqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tfpkjvbpk"/><path class="okas3_bqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wheat-off"} {...others} />);
}

export default Component;

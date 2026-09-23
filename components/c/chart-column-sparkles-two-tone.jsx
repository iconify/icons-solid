import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x9emg4bdv.css';
import '../../css/o/oxxoeqbsw.css';
import '../../css/q/qpk590b-s.css';
import '../../css/x/xcu8ss0py.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x9emg4bdv"/><path class="oxxoeqbsw"/><path class="qpk590b-s"/><path class="xcu8ss0py"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-column-sparkles-two-tone"} {...others} />);
}

export default Component;

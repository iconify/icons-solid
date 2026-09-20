import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gwajrx3iw.css';
import '../../css/e/e_s0jaccd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gwajrx3iw"/><path class="e_s0jaccd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:math-max-min"} {...others} />);
}

export default Component;

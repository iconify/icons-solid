import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/atjec8blw.css';
import '../../css/j/jv3e6ndtp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="atjec8blw"/><path class="jv3e6ndtp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-key"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/ql_5iibrw.css';
import '../../css/t/thvy-l7ss.css';
import '../../css/j/jq0k9ob9h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ql_5iibrw"/><path class="thvy-l7ss"/><path class="jq0k9ob9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:recycle"} {...others} />);
}

export default Component;

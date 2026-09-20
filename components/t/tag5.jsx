import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/emz8k3byl.css';
import '../../css/i/ihmbhbcza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="emz8k3byl"/><path class="ihmbhbcza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:tag5"} {...others} />);
}

export default Component;

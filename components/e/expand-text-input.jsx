import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/ky8ibgbew.css';
import '../../css/i/iprq872zw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ky8ibgbew"/><path class="iprq872zw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:expand-text-input"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jraag1gus.css';
import '../../css/t/tzb2l-bbx.css';
import '../../css/g/g8-jwabbb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="jraag1gus"/><path class="tzb2l-bbx"/><circle transform="rotate(25 12.083 36.688)" class="g8-jwabbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:google-ads"} {...others} />);
}

export default Component;

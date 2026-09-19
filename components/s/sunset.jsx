import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/i/i4sitdlur.css';
import '../../css/v/vca6n0zbn.css';
import '../../css/i/i1vbw2wll.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="i4sitdlur"/><path class="vca6n0zbn"/><circle class="i1vbw2wll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sunset"} {...others} />);
}

export default Component;

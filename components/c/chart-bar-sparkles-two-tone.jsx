import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s4p403bih.css';
import '../../css/c/c1_mkf7lu.css';
import '../../css/x/xon_9ib8a.css';
import '../../css/f/fd4i3sbcs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s4p403bih"/><path class="c1_mkf7lu"/><path class="xon_9ib8a"/><path class="fd4i3sbcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-bar-sparkles-two-tone"} {...others} />);
}

export default Component;

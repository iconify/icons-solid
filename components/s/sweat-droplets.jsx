import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dyi2rfatv.css';
import '../../css/s/s-dd5xbfr.css';
import '../../css/v/v3-ezgbay.css';
import '../../css/v/vzu-fbb3n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="dyi2rfatv"/><path class="s-dd5xbfr"/><path clip-rule="evenodd" class="v3-ezgbay"/><path class="vzu-fbb3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:sweat-droplets"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/icg4znpvz.css';
import '../../css/c/c93kobbbl.css';
import '../../css/b/btx7f2bco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="icg4znpvz wm-k"/><path class="c93kobbbl wm-a"/><path class="btx7f2bco wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:sliders"} {...others} />);
}

export default Component;

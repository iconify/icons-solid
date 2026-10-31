import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uqg8leb2p.css';
import '../../css/e/ekmzz35gu.css';
import '../../css/s/s_zokst5d.css';
import '../../css/k/kz99pwb4b.css';
import '../../css/f/fru2z4b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="uqg8leb2p wm-shadow"/><path class="ekmzz35gu wm-shadow"/><path class="s_zokst5d"/><path class="kz99pwb4b"/><path class="fru2z4b0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:mountain-snow"} {...others} />);
}

export default Component;

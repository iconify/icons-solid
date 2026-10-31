import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/s0fitmm0c.css';
import '../../css/a/aq7fl7bzm.css';
import '../../css/r/rk2r9-bbi.css';
import '../../css/q/qtdkd5bib.css';
import '../../css/y/ynnjdrb9c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="s0fitmm0c wm-shadow"/><path class="aq7fl7bzm wm-shadow"/><path class="rk2r9-bbi"/><path class="qtdkd5bib"/><path class="ynnjdrb9c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:wand-sparkles"} {...others} />);
}

export default Component;

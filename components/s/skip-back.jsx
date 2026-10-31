import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/z03v2kzni.css';
import '../../css/f/fr8plouco.css';
import '../../css/j/japcojbes.css';
import '../../css/r/rcgahzqlr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow z03v2kzni"/><path class="fr8plouco wm-shadow"/><path class="japcojbes"/><path class="rcgahzqlr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:skip-back"} {...others} />);
}

export default Component;

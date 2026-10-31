import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tlcni_utg.css';
import '../../css/b/bggbtzb-v.css';
import '../../css/m/mdhby1bqz.css';
import '../../css/c/ci8p1kzdl.css';
import '../../css/e/ec54dcajd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="tlcni_utg wm-shadow"/><path class="bggbtzb-v wm-shadow"/><path class="mdhby1bqz"/><path class="ci8p1kzdl"/><path class="ec54dcajd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:car"} {...others} />);
}

export default Component;

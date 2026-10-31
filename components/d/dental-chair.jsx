import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/impoytbwp.css';
import '../../css/p/pzxcrqhrr.css';
import '../../css/r/r-d6gqbls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="impoytbwp wm-shadow"/><path class="pzxcrqhrr wm-shadow"/><path class="r-d6gqbls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:dental-chair"} {...others} />);
}

export default Component;

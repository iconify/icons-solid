import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/r86azabhr.css';
import '../../css/g/gidh62bnp.css';
import '../../css/b/blfr88bmm.css';
import '../../css/e/eb2rtqbzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="r86azabhr wm-shadow"/><path class="gidh62bnp wm-shadow"/><path class="blfr88bmm"/><path class="eb2rtqbzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:tv"} {...others} />);
}

export default Component;

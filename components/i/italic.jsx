import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cj4esnb7u.css';
import '../../css/o/oqbhsmeju.css';
import '../../css/k/kl_my01pc.css';
import '../../css/o/opz2mkl7a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="cj4esnb7u wm-shadow"/><path class="oqbhsmeju wm-shadow"/><path class="kl_my01pc"/><path class="opz2mkl7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:italic"} {...others} />);
}

export default Component;

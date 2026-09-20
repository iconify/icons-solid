import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a9qmb2b7h.css';
import '../../css/j/jxkcdoisf.css';
import '../../css/f/fq160p_7h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a9qmb2b7h"/><path class="jxkcdoisf"/><path class="fq160p_7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:s-turn-right"} {...others} />);
}

export default Component;

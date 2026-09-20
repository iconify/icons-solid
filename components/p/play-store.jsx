import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rck-6gb7h.css';
import '../../css/n/n_p8ajhct.css';
import '../../css/a/aik5s80tc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="rck-6gb7h"/><path class="n_p8ajhct"/><path class="aik5s80tc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:play-store"} {...others} />);
}

export default Component;

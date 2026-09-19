import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gr9m9wk_h.css';
import '../../css/i/is84bqbrt.css';
import '../../css/h/hns4a0bze.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="gr9m9wk_h"/><path clip-rule="evenodd" class="is84bqbrt"/><path class="hns4a0bze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cast-screen"} {...others} />);
}

export default Component;

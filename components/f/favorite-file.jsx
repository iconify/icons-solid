import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/i/iw6-q-13t.css';
import '../../css/o/o15p3n8tr.css';
import '../../css/w/wwihdt6ps.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="iw6-q-13t"/><path class="o15p3n8tr"/><path class="wwihdt6ps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:favorite-file"} {...others} />);
}

export default Component;

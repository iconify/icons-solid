import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/owtfrepbq.css';
import '../../css/y/yfox0ob1f.css';
import '../../css/u/u2hfaj0rl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="owtfrepbq"/><path clip-rule="evenodd" class="yfox0ob1f"/><path clip-rule="evenodd" class="u2hfaj0rl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:bicycle-bike-flat"} {...others} />);
}

export default Component;

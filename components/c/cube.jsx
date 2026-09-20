import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ujz8xgkgq.css';
import '../../css/g/gkaae-wpd.css';
import '../../css/u/usd9mdqzj.css';
import '../../css/c/c4dm7ybpc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ujz8xgkgq"/><path clip-rule="evenodd" class="gkaae-wpd"/><path class="usd9mdqzj"/><path class="c4dm7ybpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:cube"} {...others} />);
}

export default Component;

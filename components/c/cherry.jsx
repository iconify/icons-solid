import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/e/ed99izbsd.css';
import '../../css/r/rdbckxo8s.css';
import '../../css/j/jm6531b2w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><circle class="ed99izbsd"/><circle class="rdbckxo8s"/><path class="jm6531b2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cherry"} {...others} />);
}

export default Component;

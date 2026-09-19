import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/f/fd3302bbv.css';
import '../../css/g/ghilmzbaa.css';
import '../../css/e/e6xws6b9f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="fd3302bbv"/><path class="ghilmzbaa"/><path class="e6xws6b9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:align-left-one"} {...others} />);
}

export default Component;

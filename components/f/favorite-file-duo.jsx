import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8a6n4b0g.css';
import '../../css/x/x8wf9n8-m.css';
import '../../css/e/emd0nzi7e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="r8a6n4b0g"/><path class="x8wf9n8-m"/><path class="emd0nzi7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:favorite-file-duo"} {...others} />);
}

export default Component;

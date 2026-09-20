import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y8rb29f4a.css';
import '../../css/y/y997vp8tt.css';
import '../../css/g/gbf8mw6rv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="y8rb29f4a"/><path clip-rule="evenodd" class="y997vp8tt"/><path clip-rule="evenodd" class="gbf8mw6rv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:toast-flat"} {...others} />);
}

export default Component;

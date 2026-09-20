import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i--f8_buj.css';
import '../../css/z/zxwt7gbmc.css';
import '../../css/p/p6cyscz9g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="i--f8_buj"/><path clip-rule="evenodd" class="zxwt7gbmc"/><path class="p6cyscz9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:file-report-flat"} {...others} />);
}

export default Component;

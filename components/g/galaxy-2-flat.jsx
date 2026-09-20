import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vxgnrkbfo.css';
import '../../css/d/dluzdob9i.css';
import '../../css/s/s3e1eac6e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="vxgnrkbfo"/><path class="dluzdob9i"/><path class="s3e1eac6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:galaxy-2-flat"} {...others} />);
}

export default Component;

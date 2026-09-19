import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z4n05zl7r.css';
import '../../css/g/gbvnb5bkp.css';
import '../../css/i/ij68hwbtb.css';
import '../../css/p/pgli0cb7v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="z4n05zl7r"/><path class="gbvnb5bkp"/><path class="ij68hwbtb"/><path class="pgli0cb7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:file-display"} {...others} />);
}

export default Component;

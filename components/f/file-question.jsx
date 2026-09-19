import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z4n05zl7r.css';
import '../../css/g/gbvnb5bkp.css';
import '../../css/e/ejy_ic09t.css';
import '../../css/n/nbfw7rpxc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="z4n05zl7r"/><path class="gbvnb5bkp"/><path class="ejy_ic09t"/><path clip-rule="evenodd" class="nbfw7rpxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:file-question"} {...others} />);
}

export default Component;

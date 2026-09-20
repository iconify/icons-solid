import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tukskel3t.css';
import '../../css/m/m8rngub2e.css';
import '../../css/b/bqe9d_bjc.css';
import '../../css/l/lssxrha5a.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="tukskel3t"/><path clip-rule="evenodd" class="m8rngub2e"/><path class="bqe9d_bjc"/><path class="lssxrha5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:tablet-capsule"} {...others} />);
}

export default Component;

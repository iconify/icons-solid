import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gcn8wsjcn.css';
import '../../css/r/rkats6bfp.css';
import '../../css/i/ieyfkloei.css';
import '../../css/o/ocyyo8bxi.css';

const viewBox = {"width":300,"height":200};
const content = `<g class="bi12bsetm"><path class="gcn8wsjcn"/><path class="rkats6bfp"/><path class="ieyfkloei"/><path class="ocyyo8bxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ls"} {...others} />);
}

export default Component;

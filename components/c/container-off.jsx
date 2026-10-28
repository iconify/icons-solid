import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t--xytb9r.css';
import '../../css/c/clx0kobhk.css';
import '../../css/o/oxq_4hblw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="t--xytb9r"/><rect class="clx0kobhk"/><path class="oxq_4hblw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:container-off"} {...others} />);
}

export default Component;

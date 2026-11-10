import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fkqtkzrbr.css';
import '../../css/t/tm0ea5ulw.css';
import '../../css/s/skbjqubnk.css';
import '../../css/c/cq2qml16c.css';
import '../../css/h/h_8vrjb6r.css';
import '../../css/n/nsem80brc.css';
import '../../css/m/m1vq4wbqd.css';
import '../../css/z/zms127a7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fkqtkzrbr"/><path class="tm0ea5ulw"/><path class="skbjqubnk"/><circle class="cq2qml16c"/><circle class="h_8vrjb6r"/><path class="nsem80brc"/><circle class="m1vq4wbqd"/><circle class="zms127a7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:copy-controls"} {...others} />);
}

export default Component;

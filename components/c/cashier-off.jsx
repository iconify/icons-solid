import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tl109vbjx.css';
import '../../css/o/obebb25da.css';
import '../../css/q/qzmk87bpw.css';
import '../../css/q/qylfpj-0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tl109vbjx"/><path class="obebb25da"/><path class="qzmk87bpw"/><path class="qylfpj-0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cashier-off"} {...others} />);
}

export default Component;

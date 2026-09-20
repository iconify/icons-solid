import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/b/bghzjkbqx.css';
import '../../css/b/btyszxb-c.css';
import '../../css/s/sb-ui4b5r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="bghzjkbqx"/><path class="btyszxb-c"/><path class="sb-ui4b5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:cloud-data-transfer"} {...others} />);
}

export default Component;

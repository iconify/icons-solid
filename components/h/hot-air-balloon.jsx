import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/b/br1b-hbvq.css';
import '../../css/p/p9gwfcb2o.css';
import '../../css/l/luv0-w14q.css';
import '../../css/h/hiwegtx7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="br1b-hbvq"/><path class="p9gwfcb2o"/><path class="luv0-w14q"/><path class="hiwegtx7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:hot-air-balloon"} {...others} />);
}

export default Component;

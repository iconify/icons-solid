import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v4fsqzb6f.css';
import '../../css/l/llobipb9p.css';
import '../../css/k/kut4_2vwp.css';
import '../../css/d/d5mfj8nny.css';
import '../../css/g/ggcokjo2p.css';
import '../../css/i/i6jiv-bfr.css';
import '../../css/u/u6iqmbg0u.css';
import '../../css/h/h3fsndpml.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="v4fsqzb6f"/><path class="llobipb9p"/><path class="kut4_2vwp"/><path class="d5mfj8nny"/><path class="ggcokjo2p"/><circle transform="rotate(45 33.766 14.46)" class="i6jiv-bfr"/><path class="u6iqmbg0u"/><path class="h3fsndpml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:fish"} {...others} />);
}

export default Component;

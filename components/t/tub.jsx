import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/k/k2-5ysdjd.css';
import '../../css/s/sr2t4_oxt.css';
import '../../css/k/k9kqlacbd.css';
import '../../css/y/yml010bne.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="k2-5ysdjd"/><path class="sr2t4_oxt"/><path class="k9kqlacbd"/><path class="yml010bne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:tub"} {...others} />);
}

export default Component;

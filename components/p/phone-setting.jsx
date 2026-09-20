import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/r/rbm2gcr7d.css';
import '../../css/y/y_l1qv8bi.css';
import '../../css/l/lfzysgjlv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="rbm2gcr7d"/><path class="y_l1qv8bi"/><path class="lfzysgjlv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:phone-setting"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bq5_7wbcb.css';
import '../../css/k/kh7uvqjfd.css';
import '../../css/u/uqem58bur.css';
import '../../css/s/sx9388beu.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="bq5_7wbcb clr-i-outline--badged clr-i-outline-path-1--badged"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged kh7uvqjfd"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged uqem58bur"/><path class="clr-i-outline--badged clr-i-outline-path-4--badged sx9388beu"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-5--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:bar-chart-outline-badged"} {...others} />);
}

export default Component;

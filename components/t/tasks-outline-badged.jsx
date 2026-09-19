import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/togu5tbfe.css';
import '../../css/m/me3rf7d6x.css';
import '../../css/e/e9vcz5b-g.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline--badged clr-i-outline-path-1--badged togu5tbfe"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged me3rf7d6x"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged e9vcz5b-g"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-4--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:tasks-outline-badged"} {...others} />);
}

export default Component;

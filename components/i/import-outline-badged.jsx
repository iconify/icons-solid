import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/so2l71bbs.css';
import '../../css/i/il-4-1b1b.css';
import '../../css/o/o7u7rdbat.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline--badged clr-i-outline-path-1--badged so2l71bbs"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged il-4-1b1b"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged o7u7rdbat"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-4--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:import-outline-badged"} {...others} />);
}

export default Component;

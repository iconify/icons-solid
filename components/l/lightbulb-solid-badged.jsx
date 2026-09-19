import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hql3ldhxa.css';
import '../../css/o/oynu9y2bq.css';
import '../../css/d/d4ov79bmf.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid--badged clr-i-solid-path-1--badged hql3ldhxa"/><path class="clr-i-solid--badged clr-i-solid-path-2--badged oynu9y2bq"/><path class="clr-i-solid--badged clr-i-solid-path-3--badged d4ov79bmf"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-4--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:lightbulb-solid-badged"} {...others} />);
}

export default Component;

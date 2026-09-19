import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/me_5zkbyf.css';
import '../../css/u/ufikoxbls.css';
import '../../css/b/b2o8jac-d.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<circle class="clr-i-outline--badged clr-i-outline-path-1--badged me_5zkbyf"/><circle class="clr-i-outline--badged clr-i-outline-path-2--badged ufikoxbls"/><circle class="b2o8jac-d clr-i-outline--badged clr-i-outline-path-3--badged"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-4--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:ellipsis-horizontal-outline-badged"} {...others} />);
}

export default Component;

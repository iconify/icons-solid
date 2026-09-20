import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az7hstbmu.css';
import '../../css/k/kswcaolxm.css';
import '../../css/k/k4z7zsbhp.css';
import '../../css/h/hwmvdgbaf.css';
import '../../css/t/tdhzq11dq.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="az7hstbmu"/><circle class="kswcaolxm"/><circle class="k4z7zsbhp"/><circle class="hwmvdgbaf"/><path class="tdhzq11dq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:face-with-open-mouth"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9unun_6a.css';
import '../../css/q/q5don451u.css';
import '../../css/u/uaycyrbmu.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="x9unun_6a"/><path class="q5don451u"/><path class="uaycyrbmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:tape-drive-solid-alerted"} {...others} />);
}

export default Component;

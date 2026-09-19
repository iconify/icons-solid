import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc8acmedn.css';
import '../../css/a/altk2-lbl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oc8acmedn"/><path class="altk2-lbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:wind-storm-filled"} {...others} />);
}

export default Component;

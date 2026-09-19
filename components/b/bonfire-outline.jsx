import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6dze1_pf.css';
import '../../css/v/ved-39bzt.css';
import '../../css/q/qiprivbld.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d6dze1_pf"/><path class="ved-39bzt"/><path class="qiprivbld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:bonfire-outline"} {...others} />);
}

export default Component;

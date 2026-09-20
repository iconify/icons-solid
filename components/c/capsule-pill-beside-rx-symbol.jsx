import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kg7wfnrsl.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="kg7wfnrsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:capsule-pill-beside-rx-symbol"} {...others} />);
}

export default Component;

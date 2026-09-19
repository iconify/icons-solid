import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gggi5_ica.css';
import '../../css/o/o_oa07brn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gggi5_ica"/><path class="o_oa07brn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:android-walk"} {...others} />);
}

export default Component;

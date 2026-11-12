import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkdv9v2zu.css';
import '../../css/i/ii3ykib-a.css';
import '../../css/k/kqmsxbb1x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xkdv9v2zu"/><path class="ii3ykib-a"/><path class="kqmsxbb1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:minthcm-light"} {...others} />);
}

export default Component;

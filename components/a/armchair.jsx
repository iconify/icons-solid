import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtah73b3k.css';
import '../../css/q/qvjpr-mzt.css';
import '../../css/a/ank5blg5c.css';
import '../../css/u/us40bubhb.css';
import '../../css/w/w2e12obqi.css';
import '../../css/y/yfdsewoov.css';
import '../../css/k/knhzmw-yz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vtah73b3k wm-shadow"/><path class="qvjpr-mzt"/><path class="ank5blg5c"/><path class="us40bubhb"/><path class="w2e12obqi"/><path class="wm-shine yfdsewoov"/><path class="knhzmw-yz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:armchair"} {...others} />);
}

export default Component;

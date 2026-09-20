import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xs1kckuxk.css';
import '../../css/y/ytnuvpdkn.css';
import '../../css/p/p4itqc0gf.css';
import '../../css/y/yav708big.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xs1kckuxk"/><path class="ytnuvpdkn"/><path class="p4itqc0gf"/><path class="yav708big"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-onenote-dark"} {...others} />);
}

export default Component;

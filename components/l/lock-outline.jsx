import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqwr_sfrm.css';
import '../../css/i/i6wr-kbqm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kqwr_sfrm"/><path class="i6wr-kbqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:lock-outline"} {...others} />);
}

export default Component;

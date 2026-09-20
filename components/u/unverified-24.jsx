import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3421lj_w.css';
import '../../css/n/nn46n-pqq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t3421lj_w"/><path class="nn46n-pqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:unverified-24"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebldvkbho.css';
import '../../css/x/xeuuo9m-q.css';
import '../../css/k/kpczoccur.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="ebldvkbho"/><path class="xeuuo9m-q"/><path class="kpczoccur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:arrow-up"} {...others} />);
}

export default Component;

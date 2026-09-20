import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5wa9vbik.css';
import '../../css/y/yxe-ar2ox.css';
import '../../css/t/t7jj3eoys.css';
import '../../css/q/qiah3-b8w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y5wa9vbik"/><path class="yxe-ar2ox"/><path class="t7jj3eoys"/><path class="qiah3-b8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ties-link-sharing-light"} {...others} />);
}

export default Component;

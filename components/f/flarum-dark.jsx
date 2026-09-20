import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lqnt8yb-o.css';
import '../../css/x/xvo7kubqk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lqnt8yb-o"/><path class="xvo7kubqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:flarum-dark"} {...others} />);
}

export default Component;

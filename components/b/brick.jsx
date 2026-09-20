import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qy3g12d2m.css';
import '../../css/v/vy88tye-k.css';
import '../../css/d/df96-zbse.css';
import '../../css/l/lp780vjvx.css';
import '../../css/j/jhyqgidwz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qy3g12d2m"/><path class="vy88tye-k"/><path class="df96-zbse"/><path class="lp780vjvx"/><path class="jhyqgidwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:brick"} {...others} />);
}

export default Component;

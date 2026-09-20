import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9p9d7btu.css';
import '../../css/w/wjrp0eb4n.css';
import '../../css/r/r4awi0brf.css';
import '../../css/e/ejphxzm1x.css';
import '../../css/n/nhsimxcaa.css';
import '../../css/z/zkk6yebqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o9p9d7btu"/><path class="wjrp0eb4n"/><path class="r4awi0brf"/><path class="ejphxzm1x"/><path class="nhsimxcaa"/><path class="zkk6yebqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:hoge"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gl__2bekl.css';
import '../../css/y/y181spbjf.css';
import '../../css/b/bk5_yhbfg.css';
import '../../css/u/umqx8xbnz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="gl__2bekl wm-shadow"/><path class="wm-shadow y181spbjf"/><path class="bk5_yhbfg"/><path class="umqx8xbnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:arrow-left-right"} {...others} />);
}

export default Component;

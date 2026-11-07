import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0yh6z_ij.css';
import '../../css/l/le8h1nbcf.css';
import '../../css/b/boyowm1xr.css';
import '../../css/y/yxszw6bfg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0yh6z_ij"/><path class="le8h1nbcf"/><path class="boyowm1xr"/><path class="yxszw6bfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:users-group-rounded-bold"} {...others} />);
}

export default Component;

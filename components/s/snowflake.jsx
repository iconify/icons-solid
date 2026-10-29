import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbnvcacjp.css';
import '../../css/f/f63ua4w8c.css';
import '../../css/u/u7zw3g98x.css';
import '../../css/i/ipb8njfde.css';
import '../../css/b/b9pkkvrtb.css';
import '../../css/q/q48agzbrj.css';
import '../../css/q/q19isopcu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kbnvcacjp wm-shadow"/><path class="f63ua4w8c wm-k"/><path class="u7zw3g98x wm-k"/><path class="ipb8njfde wm-k"/><path class="b9pkkvrtb wm-k"/><path class="q48agzbrj wm-k"/><path class="q19isopcu wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:snowflake"} {...others} />);
}

export default Component;

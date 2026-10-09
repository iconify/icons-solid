import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-ovh_4-p.css';
import '../../css/j/jst_e4bic.css';
import '../../css/q/q9zua8b1c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n-ovh_4-p"/><path class="jst_e4bic"/><path class="q9zua8b1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:salt-cavern-20"} {...others} />);
}

export default Component;

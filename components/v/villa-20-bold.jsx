import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9zz2bdnl.css';
import '../../css/g/gx1h2ob_o.css';
import '../../css/b/bof50_b9q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f9zz2bdnl"/><path class="gx1h2ob_o"/><path class="bof50_b9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:villa-20-bold"} {...others} />);
}

export default Component;

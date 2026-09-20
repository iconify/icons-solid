import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v43t1cc2f.css';
import '../../css/e/e732iojjz.css';
import '../../css/d/dgoi6hbuc.css';
import '../../css/z/z1txbmbju.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="v43t1cc2f"/><path class="e732iojjz"/><path class="dgoi6hbuc"/><path class="z1txbmbju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:office-building-1"} {...others} />);
}

export default Component;

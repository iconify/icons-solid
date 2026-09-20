import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/et3fidazi.css';
import '../../css/g/g-no2eohe.css';
import '../../css/j/j0afybc0c.css';
import '../../css/k/k7qgnbciy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="et3fidazi"/><path class="g-no2eohe"/><path class="j0afybc0c"/><path class="k7qgnbciy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:night-moon-begin"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c6duzxbcz.css';
import '../../css/m/mtgajfzks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c6duzxbcz"/><path class="mtgajfzks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:heater"} {...others} />);
}

export default Component;

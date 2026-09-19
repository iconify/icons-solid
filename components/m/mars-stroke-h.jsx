import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mf7xaq13d.css';

const viewBox = {"width":31,"height":24};
const content = `<path class="mf7xaq13d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:mars-stroke-h"} {...others} />);
}

export default Component;

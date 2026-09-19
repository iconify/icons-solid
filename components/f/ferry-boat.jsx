import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x21ylpbbz.css';
import '../../css/s/sz8gcyb-v.css';
import '../../css/g/gg44cuvkw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="x21ylpbbz"/><path class="sz8gcyb-v"/><path class="gg44cuvkw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ferry-boat"} {...others} />);
}

export default Component;

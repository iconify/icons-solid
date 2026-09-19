import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/ryzs-efko.css';
import '../../css/v/vm6i8hwdu.css';
import '../../css/w/w276c4mco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ryzs-efko"/><path class="vm6i8hwdu"/><path class="w276c4mco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:baby-bed-02"} {...others} />);
}

export default Component;

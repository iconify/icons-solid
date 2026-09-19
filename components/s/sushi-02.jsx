import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gu943ccdr.css';
import '../../css/i/it7nrybuq.css';
import '../../css/d/dzd7g3bgc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gu943ccdr"/><path class="it7nrybuq"/><path class="dzd7g3bgc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sushi-02"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mwqjmhb_t.css';
import '../../css/w/wpo6wibuz.css';
import '../../css/c/c9qeufl8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mwqjmhb_t"/><path class="wpo6wibuz"/><path class="c9qeufl8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dish-02"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zpurlkajd.css';
import '../../css/z/z-47jyb-q.css';
import '../../css/p/ppy_pacey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zpurlkajd"/><path class="z-47jyb-q"/><path class="ppy_pacey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:armchair-2-line-duotone"} {...others} />);
}

export default Component;

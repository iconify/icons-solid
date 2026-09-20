import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mz53xib5w.css';
import '../../css/t/to6bqieww.css';
import '../../css/h/h_tsn8bxt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mz53xib5w"/><path class="to6bqieww"/><circle class="h_tsn8bxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:translation-broken"} {...others} />);
}

export default Component;

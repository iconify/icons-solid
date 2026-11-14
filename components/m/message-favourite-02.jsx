import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/etba-6bny.css';
import '../../css/r/r_k86acet.css';
import '../../css/o/o-geo2jre.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="etba-6bny"/><path class="r_k86acet"/><path class="o-geo2jre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-favourite-02"} {...others} />);
}

export default Component;

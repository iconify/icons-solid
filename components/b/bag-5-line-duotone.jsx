import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tlsfw7bdv.css';
import '../../css/m/mw42pob4d.css';
import '../../css/a/aolr0lbho.css';
import '../../css/e/em31w8bed.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tlsfw7bdv"/><path class="mw42pob4d"/><path class="aolr0lbho"/><path class="em31w8bed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-5-line-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d0wxiwb3z.css';
import '../../css/q/qgbomkeqp.css';
import '../../css/f/fml2qzxuh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d0wxiwb3z"/><path class="qgbomkeqp"/><path class="fml2qzxuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-broken"} {...others} />);
}

export default Component;

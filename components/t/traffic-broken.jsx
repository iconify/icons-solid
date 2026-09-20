import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/izwsa0kiq.css';
import '../../css/g/g9i31fsft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="izwsa0kiq"/><path class="g9i31fsft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:traffic-broken"} {...others} />);
}

export default Component;

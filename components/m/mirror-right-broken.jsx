import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jg7ou40pg.css';
import '../../css/e/eh6mdhb4g.css';
import '../../css/c/cipdabcte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jg7ou40pg"/><path class="eh6mdhb4g"/><path class="cipdabcte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mirror-right-broken"} {...others} />);
}

export default Component;

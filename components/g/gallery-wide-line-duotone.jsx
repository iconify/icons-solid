import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/euo2u3bkq.css';
import '../../css/x/xl-jlp1rp.css';
import '../../css/h/h8i-ghbqk.css';
import '../../css/e/enjp2ob5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="euo2u3bkq"/><path class="xl-jlp1rp"/><path class="h8i-ghbqk"/><circle class="enjp2ob5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gallery-wide-line-duotone"} {...others} />);
}

export default Component;

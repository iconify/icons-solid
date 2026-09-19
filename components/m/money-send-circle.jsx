import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wkm6c6j9i.css';
import '../../css/d/dkfqmgbcg.css';
import '../../css/z/zlkcfkcwp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wkm6c6j9i"/><path class="dkfqmgbcg"/><path class="zlkcfkcwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-send-circle"} {...others} />);
}

export default Component;

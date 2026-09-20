import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fs-irwhmz.css';
import '../../css/s/si_mtzbvj.css';
import '../../css/e/e9rq2vbat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fs-irwhmz"/><path class="si_mtzbvj"/><path class="e9rq2vbat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bookmark-square-broken"} {...others} />);
}

export default Component;

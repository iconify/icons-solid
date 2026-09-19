import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ie7yfcjzo.css';
import '../../css/b/bbj86qeqv.css';
import '../../css/k/kemz52mxs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ie7yfcjzo"/><circle class="bbj86qeqv"/><path class="kemz52mxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:rss"} {...others} />);
}

export default Component;

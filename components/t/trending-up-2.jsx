import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kkms99bwe.css';
import '../../css/q/qo6aibc0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kkms99bwe"/><path class="qo6aibc0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:trending-up-2"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x9_21w3fw.css';
import '../../css/z/za0w1gbat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x9_21w3fw"/><path class="za0w1gbat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:trending-up"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/th1s19bna.css';
import '../../css/v/v9_fprbxy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="th1s19bna"/><path class="v9_fprbxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:devices-heart"} {...others} />);
}

export default Component;

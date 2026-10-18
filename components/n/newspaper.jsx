import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eoyjyl3to.css';
import '../../css/t/t4i_htgoz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="eoyjyl3to"/><path class="t4i_htgoz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:newspaper"} {...others} />);
}

export default Component;

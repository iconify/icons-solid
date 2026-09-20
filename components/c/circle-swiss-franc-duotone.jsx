import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g2u3clbzs.css';
import '../../css/o/ow5_35b5o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g2u3clbzs"/><path class="ow5_35b5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-swiss-franc-duotone"} {...others} />);
}

export default Component;

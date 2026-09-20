import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jdvg7ibyp.css';
import '../../css/p/p9-ca-3fn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jdvg7ibyp"/><path class="p9-ca-3fn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:laurel-wreath"} {...others} />);
}

export default Component;

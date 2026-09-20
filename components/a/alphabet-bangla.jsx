import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l0t-u6t8y.css';
import '../../css/o/o8rzsblfh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l0t-u6t8y"/><path class="o8rzsblfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:alphabet-bangla"} {...others} />);
}

export default Component;

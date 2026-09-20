import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oadwttbjx.css';
import '../../css/g/glul-0efb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oadwttbjx"/><path class="glul-0efb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:tournament"} {...others} />);
}

export default Component;

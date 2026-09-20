import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j3b5azbum.css';
import '../../css/v/v2cqfjbdk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j3b5azbum"/><path class="v2cqfjbdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:devices-x"} {...others} />);
}

export default Component;

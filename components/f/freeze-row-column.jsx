import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ytwev7bvv.css';
import '../../css/r/rez3-jjwz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ytwev7bvv"/><path class="rez3-jjwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:freeze-row-column"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sy5djvw9y.css';
import '../../css/x/xppqoitez.css';
import '../../css/y/yi1_783qf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sy5djvw9y"/><path class="xppqoitez"/><path class="yi1_783qf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:pumpkin-scary"} {...others} />);
}

export default Component;

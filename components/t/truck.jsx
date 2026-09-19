import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gwf5l3iwb.css';
import '../../css/a/asbceibyx.css';
import '../../css/x/xmr8z2bep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gwf5l3iwb"/><circle class="asbceibyx"/><circle class="xmr8z2bep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:truck"} {...others} />);
}

export default Component;

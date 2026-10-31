import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nsn8ivtct.css';
import '../../css/i/ixnpacb5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nsn8ivtct"/><path class="ixnpacb5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chef-hat-duocolor-round"} {...others} />);
}

export default Component;

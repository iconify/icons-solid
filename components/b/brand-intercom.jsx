import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xvrrlabzp.css';
import '../../css/c/cb0niqbat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xvrrlabzp"/><path class="cb0niqbat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-intercom"} {...others} />);
}

export default Component;

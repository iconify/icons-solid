import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rvz5irb5y.css';
import '../../css/x/x51oakbtg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rvz5irb5y"/><path class="x51oakbtg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-auth0"} {...others} />);
}

export default Component;

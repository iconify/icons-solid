import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/ml038wbpq.css';
import '../../css/f/fz3glu8co.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ml038wbpq"/><path class="fz3glu8co"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:recharging"} {...others} />);
}

export default Component;

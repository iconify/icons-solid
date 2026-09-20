import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gvbjyggso.css';
import '../../css/q/qz7p6ubjw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gvbjyggso"/><path class="qz7p6ubjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:basket-bolt"} {...others} />);
}

export default Component;

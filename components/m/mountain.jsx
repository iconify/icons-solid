import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/po66f8bac.css';
import '../../css/y/y0ic-ietd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="po66f8bac"/><path class="y0ic-ietd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mountain"} {...others} />);
}

export default Component;

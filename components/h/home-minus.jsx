import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rgyzf88xz.css';
import '../../css/g/gj0ui5c7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rgyzf88xz"/><path class="gj0ui5c7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:home-minus"} {...others} />);
}

export default Component;

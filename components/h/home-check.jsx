import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gj0ui5c7d.css';
import '../../css/b/b1s2ac66w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gj0ui5c7d"/><path class="b1s2ac66w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:home-check"} {...others} />);
}

export default Component;

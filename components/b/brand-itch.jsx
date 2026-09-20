import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/my90szb-y.css';
import '../../css/b/bagy1obwm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="my90szb-y"/><path class="bagy1obwm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-itch"} {...others} />);
}

export default Component;

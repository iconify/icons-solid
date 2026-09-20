import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mxbvi6bie.css';
import '../../css/x/xe53owbmy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mxbvi6bie"/><circle class="xe53owbmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-bottom-circle"} {...others} />);
}

export default Component;

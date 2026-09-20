import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/agheybu9e.css';
import '../../css/a/a_97d0scd.css';
import '../../css/v/v5x1hrrzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="agheybu9e"/><path class="a_97d0scd"/><path class="v5x1hrrzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-edge"} {...others} />);
}

export default Component;

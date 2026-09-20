import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fgqm14bnl.css';
import '../../css/o/othk4-llk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fgqm14bnl"/><path class="othk4-llk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:home-x"} {...others} />);
}

export default Component;

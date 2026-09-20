import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hg768lzxi.css';
import '../../css/w/w9cp6sb3p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hg768lzxi"/><path class="w9cp6sb3p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:skip-forward-fill"} {...others} />);
}

export default Component;

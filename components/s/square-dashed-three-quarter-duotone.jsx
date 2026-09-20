import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/umern85ks.css';
import '../../css/a/aw18xebdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="umern85ks"/><path class="aw18xebdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-dashed-three-quarter-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/my2zm14yk.css';
import '../../css/p/p02mjlbyt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="my2zm14yk"/><path class="p02mjlbyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sofa-fill"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y4jk9gbse.css';
import '../../css/k/kkjommb0n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y4jk9gbse"/><path class="kkjommb0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:mortarboard"} {...others} />);
}

export default Component;

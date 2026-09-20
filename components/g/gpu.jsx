import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cd_x0n3ko.css';
import '../../css/h/h7zu85-xk.css';
import '../../css/d/dgg_3-5dy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cd_x0n3ko"/><circle class="h7zu85-xk"/><circle class="dgg_3-5dy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:gpu"} {...others} />);
}

export default Component;

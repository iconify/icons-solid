import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f1149ccmm.css';
import '../../css/f/f2ny9eb9g.css';
import '../../css/u/u-_c-8bob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f1149ccmm"/><path class="f2ny9eb9g"/><path class="u-_c-8bob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lasso-off"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/usve24bks.css';
import '../../css/l/l0bbvr7zu.css';
import '../../css/t/t3oiopagy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="usve24bks"/><path class="l0bbvr7zu"/><path class="t3oiopagy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:credits"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kcgmnnblg.css';
import '../../css/d/dqc3qm2mf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kcgmnnblg"/><path class="dqc3qm2mf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:queue-pop-in"} {...others} />);
}

export default Component;

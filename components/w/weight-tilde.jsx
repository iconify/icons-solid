import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rl_p2s3kc.css';
import '../../css/x/xi4n6f8tg.css';
import '../../css/k/k45hr2bcn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rl_p2s3kc"/><path class="xi4n6f8tg"/><circle class="k45hr2bcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:weight-tilde"} {...others} />);
}

export default Component;

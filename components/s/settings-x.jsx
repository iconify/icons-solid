import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ic6uh_e1q.css';
import '../../css/u/ubfs53lam.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ic6uh_e1q"/><path class="ubfs53lam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:settings-x"} {...others} />);
}

export default Component;

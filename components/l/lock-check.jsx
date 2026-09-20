import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kdcdqb7xa.css';
import '../../css/y/ya047-3ig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kdcdqb7xa"/><path class="ya047-3ig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lock-check"} {...others} />);
}

export default Component;

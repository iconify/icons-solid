import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ub5nspc4y.css';
import '../../css/i/i9bh5s9bz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ub5nspc4y"/><path class="i9bh5s9bz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brush-off"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g1gk35bhy.css';
import '../../css/f/f67lgjpzz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g1gk35bhy"/><path class="f67lgjpzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:home-bolt"} {...others} />);
}

export default Component;

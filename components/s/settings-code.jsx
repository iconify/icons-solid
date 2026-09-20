import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jax7lgz7p.css';
import '../../css/p/pk-6-_t4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jax7lgz7p"/><path class="pk-6-_t4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:settings-code"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/az74cdzje.css';
import '../../css/k/kvz0o64rk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="az74cdzje"/><path class="kvz0o64rk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:film-two-tone"} {...others} />);
}

export default Component;

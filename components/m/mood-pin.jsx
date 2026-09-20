import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/avk2_4bfb.css';
import '../../css/a/a3ft8x4kw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="avk2_4bfb"/><path class="a3ft8x4kw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-pin"} {...others} />);
}

export default Component;

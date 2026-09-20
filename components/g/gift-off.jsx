import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bqfmiab5o.css';
import '../../css/f/ftyir0b4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bqfmiab5o"/><path class="ftyir0b4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:gift-off"} {...others} />);
}

export default Component;

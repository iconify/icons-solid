import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c5x9gzbhq.css';
import '../../css/i/isjgl5b-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c5x9gzbhq"/><path class="isjgl5b-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:rewind-backward-20"} {...others} />);
}

export default Component;

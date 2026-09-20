import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j7qjn6psg.css';
import '../../css/j/jh48l9bgk.css';
import '../../css/e/eag7f3rmh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j7qjn6psg"/><path class="jh48l9bgk"/><path class="eag7f3rmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:rating-16-plus"} {...others} />);
}

export default Component;

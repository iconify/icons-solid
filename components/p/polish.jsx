import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ui0lk82oz.css';
import '../../css/c/c7mj-sbxm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ui0lk82oz"/><path class="c7mj-sbxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:polish"} {...others} />);
}

export default Component;

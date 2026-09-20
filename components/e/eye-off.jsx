import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v3-9j2-8z.css';
import '../../css/i/i4p5t1bix.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v3-9j2-8z"/><path class="i4p5t1bix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:eye-off"} {...others} />);
}

export default Component;

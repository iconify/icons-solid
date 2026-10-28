import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/shf5vcbaz.css';
import '../../css/j/j80aqk_4l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="shf5vcbaz"/><path class="j80aqk_4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:bell"} {...others} />);
}

export default Component;

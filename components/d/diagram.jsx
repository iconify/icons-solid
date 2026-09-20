import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/i/igvsw7bfy.css';
import '../../css/t/tkt7gyrls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="igvsw7bfy"/><path class="tkt7gyrls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:diagram"} {...others} />);
}

export default Component;

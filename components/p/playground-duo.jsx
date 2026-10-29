import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/naa16cidq.css';
import '../../css/s/skgel1llp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="naa16cidq"/><path class="skgel1llp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:playground-duo"} {...others} />);
}

export default Component;

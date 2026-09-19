import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/viftnxb9l.css';
import '../../css/h/hd7ma231g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="viftnxb9l"/><path class="hd7ma231g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:cloud"} {...others} />);
}

export default Component;

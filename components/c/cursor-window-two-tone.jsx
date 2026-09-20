import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vgx5j8b2y.css';
import '../../css/t/tqif5kbes.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vgx5j8b2y"/><path class="tqif5kbes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cursor-window-two-tone"} {...others} />);
}

export default Component;

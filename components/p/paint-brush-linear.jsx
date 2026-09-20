import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxiyvi2in.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fxiyvi2in"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paint-brush-linear"} {...others} />);
}

export default Component;

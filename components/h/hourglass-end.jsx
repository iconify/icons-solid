import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxwj6jb0z.css';

const viewBox = {"width":21,"height":24};
const content = `<path class="mxwj6jb0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:hourglass-end"} {...others} />);
}

export default Component;

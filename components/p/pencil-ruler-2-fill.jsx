import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ni6nc-c3j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ni6nc-c3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:pencil-ruler-2-fill"} {...others} />);
}

export default Component;

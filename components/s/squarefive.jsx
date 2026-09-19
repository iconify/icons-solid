import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k66dz5bmp.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="k66dz5bmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:squarefive"} {...others} />);
}

export default Component;

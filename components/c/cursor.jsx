import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/damdljbyu.css';

const viewBox = {"width":340,"height":651};
const content = `<path class="damdljbyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:cursor"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jverfxb2o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jverfxb2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:video-camera"} {...others} />);
}

export default Component;

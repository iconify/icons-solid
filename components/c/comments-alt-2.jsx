import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y081e11iz.css';
import '../../css/m/m-mridb4l.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="y081e11iz"/><path class="m-mridb4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:comments-alt-2"} {...others} />);
}

export default Component;

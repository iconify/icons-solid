import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-mridb4l.css';
import '../../css/i/inzdek_cl.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="m-mridb4l"/><path class="inzdek_cl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:comments"} {...others} />);
}

export default Component;

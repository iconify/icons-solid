import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ze8ppqcua.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ze8ppqcua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:indent-decrease"} {...others} />);
}

export default Component;

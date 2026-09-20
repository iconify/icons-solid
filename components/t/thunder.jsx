import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqdup5oyd.css';
import '../../css/a/a3yzckbwx.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="bqdup5oyd"/><path class="a3yzckbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:thunder"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vhplk3b6j.css';
import '../../css/e/ehu_tqb0a.css';
import '../../css/q/qghyp15aw.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="vhplk3b6j"/><path class="ehu_tqb0a"/><path class="qghyp15aw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:mobile"} {...others} />);
}

export default Component;

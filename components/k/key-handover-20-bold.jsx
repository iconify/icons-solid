import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eab0y1u-b.css';
import '../../css/d/daaedus6x.css';
import '../../css/a/a8vq56b-f.css';
import '../../css/q/qfnoa7bmf.css';
import '../../css/q/q85_wabhj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eab0y1u-b"/><path class="daaedus6x"/><path class="a8vq56b-f"/><path class="qfnoa7bmf"/><path class="q85_wabhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:key-handover-20-bold"} {...others} />);
}

export default Component;

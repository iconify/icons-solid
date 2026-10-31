import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdhad0ihx.css';
import '../../css/b/bjhb_puya.css';
import '../../css/w/w4m-jwb9x.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="qdhad0ihx"/><path class="bjhb_puya"/><path class="w4m-jwb9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:guinea"} {...others} />);
}

export default Component;

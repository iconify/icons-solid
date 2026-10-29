import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uq57ccb_o.css';
import '../../css/a/at-zcbbjh.css';
import '../../css/d/dnsh1cbuv.css';
import '../../css/s/sx9xq1bly.css';
import '../../css/f/fdjy-kuog.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uq57ccb_o wm-k"/><path class="at-zcbbjh wm-k"/><path class="dnsh1cbuv wm-a"/><path class="sx9xq1bly wm-a"/><path class="fdjy-kuog wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:eye"} {...others} />);
}

export default Component;

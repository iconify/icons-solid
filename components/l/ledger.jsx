import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rkw1i4bzy.css';
import '../../css/v/v3s6c5b_h.css';
import '../../css/a/al6bhxbby.css';
import '../../css/i/i9y6cgbxw.css';
import '../../css/j/j3s6udbbw.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="rkw1i4bzy"/><path class="v3s6c5b_h"/><path class="al6bhxbby"/><path class="i9y6cgbxw"/><path class="j3s6udbbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:ledger"} {...others} />);
}

export default Component;

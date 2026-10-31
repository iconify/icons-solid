import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/a8bpyzb4f.css';
import '../../css/y/y08bbdcxe.css';
import '../../css/h/hr7v-vbfi.css';
import '../../css/o/op091ia4u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="a8bpyzb4f"/><path class="wm-k y08bbdcxe"/><path class="hr7v-vbfi wm-a"/><path class="op091ia4u wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:timer-reset"} {...others} />);
}

export default Component;

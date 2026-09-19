import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtbsphbxc.css';
import '../../css/o/ozp-gmbzh.css';
import '../../css/d/dneqyku5s.css';
import '../../css/a/a037hmb_i.css';
import '../../css/a/apogh5b8k.css';
import '../../css/g/gktr2bb-u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gtbsphbxc"/><path class="ozp-gmbzh"/><path class="dneqyku5s"/><path class="a037hmb_i"/><path class="apogh5b8k"/><path class="gktr2bb-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:hatchingchick"} {...others} />);
}

export default Component;

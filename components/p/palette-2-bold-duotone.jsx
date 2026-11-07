import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s09_o6rsp.css';
import '../../css/a/a0j8fkmhb.css';
import '../../css/l/ln35q8plx.css';
import '../../css/g/g7dhhz-fw.css';
import '../../css/n/nvr01tbel.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s09_o6rsp"/><path class="a0j8fkmhb"/><path class="ln35q8plx"/><path class="g7dhhz-fw"/><path class="nvr01tbel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:palette-2-bold-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yr37mbccl.css';
import '../../css/k/kupi4sbtm.css';
import '../../css/p/psqa162mc.css';
import '../../css/e/epwd42pev.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k yr37mbccl"/><path class="kupi4sbtm wm-k"/><path class="psqa162mc wm-a"/><path class="epwd42pev wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:flower"} {...others} />);
}

export default Component;

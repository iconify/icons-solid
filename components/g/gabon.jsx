import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgu_qf8mr.css';
import '../../css/n/nirbr8brm.css';
import '../../css/a/aot_jkqqo.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="fgu_qf8mr"/><path class="nirbr8brm"/><path class="aot_jkqqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:gabon"} {...others} />);
}

export default Component;

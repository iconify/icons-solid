import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jn_frcb-c.css';
import '../../css/o/oxd2n2_mg.css';
import '../../css/r/rwsejcbky.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jn_frcb-c"/><path class="oxd2n2_mg"/><path clip-rule="evenodd" class="rwsejcbky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:safe-square-bold-duotone"} {...others} />);
}

export default Component;

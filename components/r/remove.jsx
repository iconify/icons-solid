import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rf-wdxbtk.css';
import '../../css/k/krz3t3bmn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rf-wdxbtk"/><path class="krz3t3bmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:remove"} {...others} />);
}

export default Component;

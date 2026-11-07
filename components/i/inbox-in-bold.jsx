import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qo16j27lx.css';
import '../../css/j/jbgenzzof.css';
import '../../css/f/fwxuhy9_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qo16j27lx"/><path class="jbgenzzof"/><path class="fwxuhy9_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:inbox-in-bold"} {...others} />);
}

export default Component;

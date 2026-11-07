import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jlc6xfqvl.css';
import '../../css/q/qqluwf17f.css';
import '../../css/r/rwbdnz60g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jlc6xfqvl"/><path class="qqluwf17f"/><path clip-rule="evenodd" class="rwbdnz60g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dollar-bold"} {...others} />);
}

export default Component;

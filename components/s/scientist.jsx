import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6fel0b2a.css';
import '../../css/k/kmzp8bb_p.css';
import '../../css/c/ctfudzq1d.css';
import '../../css/i/i2hbb3ney.css';
import '../../css/w/wfy5j2bud.css';
import '../../css/h/huhsgacts.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c6fel0b2a"/><circle class="kmzp8bb_p"/><circle class="ctfudzq1d"/><circle class="i2hbb3ney"/><circle class="wfy5j2bud"/><path class="huhsgacts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:scientist"} {...others} />);
}

export default Component;

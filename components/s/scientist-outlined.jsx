import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctfudzq1d.css';
import '../../css/i/i2hbb3ney.css';
import '../../css/w/wfy5j2bud.css';
import '../../css/g/g0b7pibhi.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="ctfudzq1d"/><circle class="i2hbb3ney"/><circle class="wfy5j2bud"/><path class="g0b7pibhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:scientist-outlined"} {...others} />);
}

export default Component;

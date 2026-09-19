import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xzvogwsua.css';
import '../../css/p/pubvu5g2l.css';
import '../../css/x/xtoqjuvtp.css';
import '../../css/r/rkiddqluw.css';
import '../../css/s/syk7mps5y.css';
import '../../css/m/maw6_-12u.css';

const viewBox = {"width":49,"height":48};
const content = `<defs><mask id="SVGdUj5Lepg"><g class="ft5dv1b6b"><rect class="xzvogwsua"/><path class="pubvu5g2l"/><circle class="xtoqjuvtp"/><circle class="rkiddqluw"/><circle class="syk7mps5y"/></g></mask></defs><path mask="url(#SVGdUj5Lepg)" class="maw6_-12u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:washing-machine"} {...others} />);
}

export default Component;

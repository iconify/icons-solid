import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l2_sfzbat.css';
import '../../css/t/t772qacii.css';
import '../../css/d/dmdszrbbq.css';
import '../../css/m/m_lp59b7x.css';
import '../../css/q/qpm479bmc.css';
import '../../css/a/a3py09hlh.css';
import '../../css/k/kqa6tllpf.css';
import '../../css/i/ilok9g2yq.css';
import '../../css/x/xb5spxbwq.css';
import '../../css/a/ab22-cbdn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="l2_sfzbat"/><path class="t772qacii"/><path class="dmdszrbbq"/><path class="m_lp59b7x"/><path class="qpm479bmc"/><path class="a3py09hlh"/><path class="kqa6tllpf"/><path class="ilok9g2yq"/><path class="xb5spxbwq"/><path class="ab22-cbdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:man-getting-massage-medium-light"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ao5n3c5je.css';
import '../../css/t/t772qacii.css';
import '../../css/f/f6yu8eb3i.css';
import '../../css/o/ogmef4b2a.css';
import '../../css/q/qr599ybpj.css';
import '../../css/u/uqtyu8bus.css';
import '../../css/k/kqa6tllpf.css';
import '../../css/a/apeoxr2cg.css';
import '../../css/y/yomj_r2pe.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ao5n3c5je"/><path class="t772qacii"/><path class="f6yu8eb3i"/><path class="ogmef4b2a"/><path class="qr599ybpj"/><path class="uqtyu8bus"/><path class="kqa6tllpf"/><path class="apeoxr2cg"/><path class="yomj_r2pe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:man-getting-massage-light"} {...others} />);
}

export default Component;

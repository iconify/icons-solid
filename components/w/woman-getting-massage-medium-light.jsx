import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h3qn20bdh.css';
import '../../css/l/l2_sfzbat.css';
import '../../css/u/u_mqk8o8p.css';
import '../../css/d/dmdszrbbq.css';
import '../../css/h/hz5x2bcch.css';
import '../../css/m/mmv6fzb2q.css';
import '../../css/a/a3py09hlh.css';
import '../../css/k/kqa6tllpf.css';
import '../../css/a/ab22-cbdn.css';
import '../../css/i/ilok9g2yq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="h3qn20bdh"/><path class="l2_sfzbat"/><path class="u_mqk8o8p"/><path class="dmdszrbbq"/><path class="hz5x2bcch"/><path class="mmv6fzb2q"/><path class="a3py09hlh"/><path class="kqa6tllpf"/><path class="ab22-cbdn"/><path class="ilok9g2yq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:woman-getting-massage-medium-light"} {...others} />);
}

export default Component;

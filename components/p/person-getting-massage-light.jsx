import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ao5n3c5je.css';
import '../../css/q/qhadldbcm.css';
import '../../css/f/f6yu8eb3i.css';
import '../../css/v/v83l_b00i.css';
import '../../css/b/bbbssgbkj.css';
import '../../css/o/ojqjgmb5z.css';
import '../../css/u/uqtyu8bus.css';
import '../../css/k/kqa6tllpf.css';
import '../../css/y/yomj_r2pe.css';
import '../../css/y/yaxu17b7v.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ao5n3c5je"/><path class="qhadldbcm"/><path class="f6yu8eb3i"/><path class="v83l_b00i"/><path class="bbbssgbkj"/><path class="ojqjgmb5z"/><path class="uqtyu8bus"/><path class="kqa6tllpf"/><path class="yomj_r2pe"/><path class="yaxu17b7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:person-getting-massage-light"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zxsb6gbnq.css';
import '../../css/k/kz_eqvbal.css';
import '../../css/p/pvliqkqmf.css';
import '../../css/t/tddl4zbes.css';
import '../../css/w/we0c5abhm.css';
import '../../css/k/k8bzvks-z.css';
import '../../css/k/k1_55ibjf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="zxsb6gbnq"/><path class="kz_eqvbal"/><path class="pvliqkqmf"/><path class="tddl4zbes"/><path class="we0c5abhm"/><path class="k8bzvks-z"/><path class="k1_55ibjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:cat-with-tears-of-joy"} {...others} />);
}

export default Component;

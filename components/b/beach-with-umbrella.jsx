import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kpp4nackf.css';
import '../../css/m/m57_qac1g.css';
import '../../css/d/dpn7wguwv.css';
import '../../css/q/qh6-sclag.css';
import '../../css/y/ykom1db1q.css';
import '../../css/f/fz53uc9vv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="kpp4nackf"/><path class="m57_qac1g"/><path class="dpn7wguwv"/><path class="qh6-sclag"/><path class="ykom1db1q"/><path class="fz53uc9vv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:beach-with-umbrella"} {...others} />);
}

export default Component;

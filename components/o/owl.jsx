import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/fuz479bot.css';
import '../../css/f/fcp723b9j.css';
import '../../css/q/qefv847_y.css';
import '../../css/g/gwafzf_sr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="fuz479bot"/><path class="fcp723b9j"/><circle class="qefv847_y"/><circle class="gwafzf_sr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:owl"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xozs2mbdz.css';
import '../../css/c/c7ba0c39j.css';
import '../../css/r/racqmr4qh.css';
import '../../css/o/oez8gzbxd.css';
import '../../css/b/b1xaj94jr.css';
import '../../css/r/rfzu-sjnr.css';
import '../../css/i/isc0hbc0g.css';
import '../../css/v/vudlxhv6m.css';
import '../../css/t/tf0idgbjt.css';
import '../../css/g/gj8ue0f6b.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="xozs2mbdz"/><path class="c7ba0c39j"/><path class="racqmr4qh"/><path class="oez8gzbxd"/><path class="b1xaj94jr"/><path class="rfzu-sjnr"/><path class="isc0hbc0g"/><path class="vudlxhv6m"/><path class="tf0idgbjt"/><path class="gj8ue0f6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:boy-light"} {...others} />);
}

export default Component;

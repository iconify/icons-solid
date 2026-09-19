import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/g/g-wkuab2i.css';
import '../../css/n/n0zqm8odz.css';
import '../../css/y/yh8iq_b5d.css';
import '../../css/b/b7nrt6bdf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="g-wkuab2i"/><path class="n0zqm8odz"/><path class="yh8iq_b5d"/><path class="b7nrt6bdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:enquire"} {...others} />);
}

export default Component;

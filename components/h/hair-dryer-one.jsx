import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/s_fep1eov.css';
import '../../css/f/fdc_qf35n.css';
import '../../css/a/arhzl8byt.css';
import '../../css/h/hi3w4_u-a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="s_fep1eov"/><path class="fdc_qf35n"/><path class="arhzl8byt"/><circle class="hi3w4_u-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:hair-dryer-one"} {...others} />);
}

export default Component;

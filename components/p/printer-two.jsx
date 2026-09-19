import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xsydfnbew.css';
import '../../css/o/o39sc1brf.css';
import '../../css/t/tp0tmxgkr.css';
import '../../css/d/d-jqf1bjs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="xsydfnbew"/><rect class="o39sc1brf"/><path class="tp0tmxgkr"/><path class="d-jqf1bjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:printer-two"} {...others} />);
}

export default Component;

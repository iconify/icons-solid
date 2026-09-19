import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/s/s-8_facdk.css';
import '../../css/m/m0v40n6wf.css';
import '../../css/d/duzg3-npv.css';
import '../../css/m/m0hl1rncr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><circle class="s-8_facdk"/><path class="m0v40n6wf"/><circle class="duzg3-npv"/><path class="m0hl1rncr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:people-search-one"} {...others} />);
}

export default Component;

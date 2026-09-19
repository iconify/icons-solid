import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/d/ds0w_ub0o.css';
import '../../css/k/kzhui5l3j.css';
import '../../css/a/ayzgaoqrs.css';
import '../../css/g/gkmfehj7b.css';
import '../../css/h/hp89i7bpq.css';
import '../../css/c/cteojybyy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="ds0w_ub0o"/><path class="kzhui5l3j"/><path class="ayzgaoqrs"/><path class="gkmfehj7b"/><path class="hp89i7bpq"/><path class="cteojybyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:car-battery"} {...others} />);
}

export default Component;

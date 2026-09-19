import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/pbruvwbic.css';
import '../../css/b/b064tu1ws.css';
import '../../css/q/qjfhldb9u.css';
import '../../css/s/sc_fqnbin.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="pbruvwbic"/><path class="b064tu1ws"/><circle class="qjfhldb9u"/><path class="sc_fqnbin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:pic-one"} {...others} />);
}

export default Component;

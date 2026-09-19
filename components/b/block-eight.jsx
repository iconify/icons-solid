import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/u/u_eetobob.css';
import '../../css/n/nok-9wbgu.css';
import '../../css/c/c_t74dp4a.css';
import '../../css/l/lewwhobzy.css';
import '../../css/f/f_1js0uww.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="u_eetobob"/><path class="nok-9wbgu"/><path class="c_t74dp4a"/><path class="lewwhobzy"/><path class="f_1js0uww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:block-eight"} {...others} />);
}

export default Component;

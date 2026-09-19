import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g54fotb1f.css';
import '../../css/b/bshyy_b6k.css';
import '../../css/a/a358q0xfm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="g54fotb1f"><circle class="bshyy_b6k"/><path class="a358q0xfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:boy-one"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/r/r6jxgebue.css';
import '../../css/a/a7oce5bvd.css';
import '../../css/h/hnnvz45cz.css';
import '../../css/s/segv2ibyl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="r6jxgebue"/><path class="a7oce5bvd"/><path class="hnnvz45cz"/><circle class="segv2ibyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sunset"} {...others} />);
}

export default Component;

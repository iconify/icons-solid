import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/r/rt8_ymbfa.css';
import '../../css/z/zh84q581l.css';
import '../../css/f/fml2hgb5a.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="nv9qcacyl"><path class="rt8_ymbfa"/><path class="zh84q581l"/><path class="fml2hgb5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ic-4x3"} {...others} />);
}

export default Component;

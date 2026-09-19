import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/kv2m18g6m.css';
import '../../css/w/w1u_bpdsb.css';
import '../../css/v/voz9ctthh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHpuIjbYp"><g class="aql7dnt-u"><path class="kv2m18g6m"/><path class="w1u_bpdsb"/><path class="voz9ctthh"/></g></mask></defs><path mask="url(#SVGHpuIjbYp)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:teapot"} {...others} />);
}

export default Component;

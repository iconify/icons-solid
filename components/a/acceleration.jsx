import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/c/cmydvqi2y.css';
import '../../css/k/kxotbvbyx.css';
import '../../css/j/jmnh04bvk.css';
import '../../css/y/ybze6zb8r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGsCw5rc6P"><g class="hv130ab-t"><path class="cmydvqi2y"/><path class="kxotbvbyx"/><path class="jmnh04bvk"/><path class="ybze6zb8r"/></g></mask></defs><path mask="url(#SVGsCw5rc6P)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:acceleration"} {...others} />);
}

export default Component;

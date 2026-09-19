import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/q/qkj_e9ogh.css';
import '../../css/v/vei23bccy.css';
import '../../css/h/hgnqob8wp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGBpdbbecm"><g class="gopnm44um"><path class="qkj_e9ogh"/><path class="vei23bccy"/><path class="hgnqob8wp"/></g></mask></defs><path mask="url(#SVGBpdbbecm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:church-two"} {...others} />);
}

export default Component;

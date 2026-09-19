import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/v/v0bbswb4j.css';
import '../../css/q/qlkj-ye-j.css';
import '../../css/g/ga6yqxbkp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGwCY6XcVw"><g class="hv130ab-t"><path class="v0bbswb4j"/><path class="qlkj-ye-j"/><path class="ga6yqxbkp"/></g></mask></defs><path mask="url(#SVGwCY6XcVw)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:data-server"} {...others} />);
}

export default Component;

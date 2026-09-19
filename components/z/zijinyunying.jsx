import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/j/jagzkt7_r.css';
import '../../css/t/t3fp4ybfh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGnMhcceKY"><g class="wwvp95byt"><path class="jagzkt7_r"/><path class="t3fp4ybfh"/></g></mask></defs><path mask="url(#SVGnMhcceKY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:zijinyunying"} {...others} />);
}

export default Component;

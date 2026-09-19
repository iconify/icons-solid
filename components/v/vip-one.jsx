import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/w/wr3xz_b7n.css';
import '../../css/l/lqg-_obgr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGbHlnI1Jp"><g class="wwvp95byt"><path class="wr3xz_b7n"/><path class="lqg-_obgr"/></g></mask></defs><path mask="url(#SVGbHlnI1Jp)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:vip-one"} {...others} />);
}

export default Component;

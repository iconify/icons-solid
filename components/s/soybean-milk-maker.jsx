import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/i/iu9akzaqj.css';
import '../../css/x/x_ngs1ynm.css';
import '../../css/z/zk_pvmbnr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGzHGZTdva"><g class="wwvp95byt"><path class="iu9akzaqj"/><path class="x_ngs1ynm"/><path class="zk_pvmbnr"/></g></mask></defs><path mask="url(#SVGzHGZTdva)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:soybean-milk-maker"} {...others} />);
}

export default Component;

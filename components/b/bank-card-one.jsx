import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xk9j6vb_y.css';
import '../../css/i/i_oaw5bnx.css';
import '../../css/u/uojdu77al.css';
import '../../css/d/dxdme3bve.css';
import '../../css/p/pea2i9bca.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZnuMUdsz"><g class="wwvp95byt"><path class="xk9j6vb_y"/><rect class="i_oaw5bnx"/><path class="uojdu77al"/><path class="dxdme3bve"/><path class="pea2i9bca"/></g></mask></defs><path mask="url(#SVGZnuMUdsz)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bank-card-one"} {...others} />);
}

export default Component;

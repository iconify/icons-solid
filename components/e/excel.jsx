import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/l/lmm5f77sk.css';
import '../../css/r/rgqhnbciz.css';
import '../../css/o/o4fuzn82d.css';
import '../../css/y/ybt2h0but.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGhNMHdODu"><g class="gopnm44um"><path class="lmm5f77sk"/><path class="rgqhnbciz"/><path class="o4fuzn82d"/><path class="ybt2h0but"/></g></mask></defs><path mask="url(#SVGhNMHdODu)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:excel"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fx319o55e.css';
import '../../css/n/n148kwbte.css';
import '../../css/d/d8dbn7bpp.css';
import '../../css/i/igkx63b1j.css';
import '../../css/p/p0lncxbde.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="fx319o55e"/><path class="n148kwbte"/><circle class="d8dbn7bpp"/><circle class="igkx63b1j"/><path class="p0lncxbde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:shopping-cart"} {...others} />);
}

export default Component;

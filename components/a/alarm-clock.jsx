import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/c/c6jtjthhk.css';
import '../../css/f/fcu8rib6g.css';
import '../../css/n/ntbo-qb0z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGzvT79cfR"><g class="ufeehvblu"><path class="c6jtjthhk"/><path class="fcu8rib6g"/><path class="ntbo-qb0z"/></g></mask></defs><path mask="url(#SVGzvT79cfR)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:alarm-clock"} {...others} />);
}

export default Component;

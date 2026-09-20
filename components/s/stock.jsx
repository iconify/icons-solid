import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/unrrcibpo.css';
import '../../css/p/pyzl13r-s.css';
import '../../css/c/cw6plkbph.css';
import '../../css/y/yo17hwt9i.css';
import '../../css/r/r3zacpb6c.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="unrrcibpo"/><path class="pyzl13r-s"/><path class="cw6plkbph"/><path class="yo17hwt9i"/><path class="r3zacpb6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:stock"} {...others} />);
}

export default Component;

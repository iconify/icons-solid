import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ojr5e4ttl.css';
import '../../css/m/mz2arkbde.css';
import '../../css/d/dbh3tgf1j.css';
import '../../css/b/b-wozacim.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ojr5e4ttl"/><path class="mz2arkbde"/><path clip-rule="evenodd" class="dbh3tgf1j"/><path clip-rule="evenodd" class="b-wozacim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:mouse-wireless-1-flat"} {...others} />);
}

export default Component;

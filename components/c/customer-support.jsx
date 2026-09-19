import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/noe0bscax.css';
import '../../css/d/db2ak0uae.css';
import '../../css/h/h7iihkbqr.css';
import '../../css/e/ez2b4ubpe.css';
import '../../css/n/ni3h3xb3j.css';
import '../../css/i/ir7fq_u0x.css';
import '../../css/b/bsdwx1beh.css';
import '../../css/o/oak2a3itw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="noe0bscax"/><path class="db2ak0uae"/><circle class="h7iihkbqr"/><path class="ez2b4ubpe"/><path class="ni3h3xb3j"/><circle class="ir7fq_u0x"/><circle class="bsdwx1beh"/><circle class="oak2a3itw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:customer-support"} {...others} />);
}

export default Component;

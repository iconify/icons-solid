import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mechmg1pl.css';
import '../../css/f/fvdb48b-r.css';
import '../../css/g/gy17i4r8b.css';
import '../../css/f/fxhttsn0u.css';
import '../../css/u/ucdiad9nq.css';
import '../../css/f/fqlijmbsc.css';
import '../../css/u/uwullu9jn.css';

const viewBox = {"width":72,"height":72};
const content = `<rect class="mechmg1pl"/><path class="fvdb48b-r"/><path class="gy17i4r8b"/><path class="fxhttsn0u"/><circle class="ucdiad9nq"/><path class="fqlijmbsc"/><path class="uwullu9jn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:mobile-message"} {...others} />);
}

export default Component;

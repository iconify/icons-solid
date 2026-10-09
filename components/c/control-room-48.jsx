import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/za30h5bbb.css';
import '../../css/l/la7u05btg.css';
import '../../css/t/trua1bnbj.css';
import '../../css/n/no056qffi.css';
import '../../css/u/uksulubnp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="za30h5bbb"/><path class="la7u05btg"/><path class="trua1bnbj"/><path class="no056qffi"/><path class="uksulubnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:control-room-48"} {...others} />);
}

export default Component;

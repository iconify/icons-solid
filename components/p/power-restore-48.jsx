import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ague2ubah.css';
import '../../css/p/p3pbj6l7l.css';
import '../../css/d/d0c6zccib.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ague2ubah"/><path class="p3pbj6l7l"/><path class="d0c6zccib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-restore-48"} {...others} />);
}

export default Component;

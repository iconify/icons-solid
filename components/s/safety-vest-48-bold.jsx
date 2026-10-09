import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn1iq8b7l.css';
import '../../css/s/scwadacah.css';
import '../../css/g/gdsoirb5d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tn1iq8b7l"/><path class="scwadacah"/><path class="gdsoirb5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:safety-vest-48-bold"} {...others} />);
}

export default Component;

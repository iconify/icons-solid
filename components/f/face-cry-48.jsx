import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/f/fhq5d2cfe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="fhq5d2cfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:face-cry-48"} {...others} />);
}

export default Component;

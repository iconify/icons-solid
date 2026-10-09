import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozhwhlihc.css';
import '../../css/k/kr4l01btv.css';
import '../../css/n/nrn-6ibeo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ozhwhlihc"/><path class="kr4l01btv"/><path class="nrn-6ibeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lamp-20"} {...others} />);
}

export default Component;

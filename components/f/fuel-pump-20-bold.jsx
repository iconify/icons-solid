import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azc5oubyv.css';
import '../../css/y/ywfl4rbfp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="azc5oubyv"/><path class="ywfl4rbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fuel-pump-20-bold"} {...others} />);
}

export default Component;

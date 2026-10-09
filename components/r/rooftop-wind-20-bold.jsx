import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3lgxlbxk.css';
import '../../css/s/shu9gmbgv.css';
import '../../css/n/nbpoujbxo.css';
import '../../css/v/vsoe54eox.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j3lgxlbxk"/><path class="shu9gmbgv"/><path class="nbpoujbxo"/><path class="vsoe54eox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rooftop-wind-20-bold"} {...others} />);
}

export default Component;

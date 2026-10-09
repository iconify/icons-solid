import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmptwf-ti.css';
import '../../css/e/eq_morblf.css';
import '../../css/q/qntnywbvk.css';
import '../../css/w/wa3ofwbel.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jmptwf-ti"/><path class="eq_morblf"/><path class="qntnywbvk"/><path class="wa3ofwbel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charge-card-48-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/heh8_qbzw.css';
import '../../css/j/jqemctbeh.css';
import '../../css/l/l7fkvo-fr.css';
import '../../css/m/moj4tsily.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="heh8_qbzw"/><path class="jqemctbeh"/><path class="l7fkvo-fr"/><path class="moj4tsily"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-array-sun-20-bold"} {...others} />);
}

export default Component;

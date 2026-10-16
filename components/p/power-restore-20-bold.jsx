import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hs3_9lslw.css';
import '../../css/j/jg-yaccaq.css';
import '../../css/e/exrx6ubga.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hs3_9lslw"/><path class="jg-yaccaq"/><path class="exrx6ubga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-restore-20-bold"} {...others} />);
}

export default Component;

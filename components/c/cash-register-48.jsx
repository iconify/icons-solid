import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t428kcbwb.css';
import '../../css/j/jc8zivbnv.css';
import '../../css/b/bzt789kkw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t428kcbwb"/><path class="jc8zivbnv"/><path class="bzt789kkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cash-register-48"} {...others} />);
}

export default Component;

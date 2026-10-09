import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwrb__blp.css';
import '../../css/t/tp6desghj.css';
import '../../css/o/o7vde7bur.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pwrb__blp"/><path class="tp6desghj"/><path class="o7vde7bur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:analytics-48"} {...others} />);
}

export default Component;

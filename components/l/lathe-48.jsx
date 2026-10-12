import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ertjoi4oz.css';
import '../../css/a/alq4kgbda.css';
import '../../css/g/g85390r2q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ertjoi4oz"/><path class="alq4kgbda"/><path class="g85390r2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lathe-48"} {...others} />);
}

export default Component;

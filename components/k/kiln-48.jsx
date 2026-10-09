import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1-gwnbto.css';
import '../../css/c/c65-ehvfy.css';
import '../../css/e/ey465pbkj.css';
import '../../css/s/srx1rubiq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y1-gwnbto"/><path class="c65-ehvfy"/><path class="ey465pbkj"/><path class="srx1rubiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kiln-48"} {...others} />);
}

export default Component;

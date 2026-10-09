import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3q6uacna.css';
import '../../css/t/ta7bnee7t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v3q6uacna"/><path class="ta7bnee7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:panel-left-48"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqboyjbcd.css';
import '../../css/k/ktpj8ab8f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bqboyjbcd"/><path class="ktpj8ab8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:function-48"} {...others} />);
}

export default Component;

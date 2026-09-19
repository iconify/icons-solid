import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bpryfp0ky.css';
import '../../css/o/omiz2rshg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bpryfp0ky"/><path class="omiz2rshg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:globe"} {...others} />);
}

export default Component;

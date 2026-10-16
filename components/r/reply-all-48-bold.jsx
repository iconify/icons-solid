import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6pg-hzok.css';
import '../../css/i/i8cbj5bwx.css';
import '../../css/o/o-urmp0yo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r6pg-hzok"/><path class="i8cbj5bwx"/><path class="o-urmp0yo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:reply-all-48-bold"} {...others} />);
}

export default Component;

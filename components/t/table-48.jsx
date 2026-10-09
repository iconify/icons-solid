import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rthtgrrbd.css';
import '../../css/l/l-i-cfbtp.css';
import '../../css/c/c5c5h6dcw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rthtgrrbd"/><path class="l-i-cfbtp"/><path class="c5c5h6dcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:table-48"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e1s64xbrq.css';
import '../../css/i/ironyyb0b.css';
import '../../css/u/ugvw6bcga.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e1s64xbrq"/><path class="ironyyb0b"/><path class="ugvw6bcga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:spring-balance-48-bold"} {...others} />);
}

export default Component;

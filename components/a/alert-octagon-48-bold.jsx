import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/otpi8ybma.css';
import '../../css/r/rhawa5b1j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="otpi8ybma"/><path class="rhawa5b1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:alert-octagon-48-bold"} {...others} />);
}

export default Component;

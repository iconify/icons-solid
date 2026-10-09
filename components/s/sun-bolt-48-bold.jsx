import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1iqz1-zd.css';
import '../../css/r/r0d7qbcdy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h1iqz1-zd"/><path class="r0d7qbcdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sun-bolt-48-bold"} {...others} />);
}

export default Component;

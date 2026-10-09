import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udbsvx9ze.css';
import '../../css/x/x6a75wd9x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="udbsvx9ze"/><path class="x6a75wd9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:eye-off-48-bold"} {...others} />);
}

export default Component;

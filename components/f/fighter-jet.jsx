import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7ycpab4d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z7ycpab4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:fighter-jet"} {...others} />);
}

export default Component;

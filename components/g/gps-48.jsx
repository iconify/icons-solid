import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ndoo8eizj.css';
import '../../css/f/fsi0i5btw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ndoo8eizj"/><path class="fsi0i5btw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gps-48"} {...others} />);
}

export default Component;

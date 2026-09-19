import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_b-gubjy.css';
import '../../css/m/m8pf_nbon.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="x_b-gubjy"/><path class="m8pf_nbon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:switch-button"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fspafybgd.css';
import '../../css/f/fw66xi3qj.css';
import '../../css/a/ayok7_nhc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fspafybgd"/><path class="fw66xi3qj"/><path class="ayok7_nhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:houseboat-20-bold"} {...others} />);
}

export default Component;

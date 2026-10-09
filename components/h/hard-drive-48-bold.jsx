import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qu9rvubvf.css';
import '../../css/q/qauntjblp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qu9rvubvf"/><path class="qauntjblp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hard-drive-48-bold"} {...others} />);
}

export default Component;

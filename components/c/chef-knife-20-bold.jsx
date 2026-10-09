import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agva6viha.css';
import '../../css/m/mb4eqwb3y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="agva6viha"/><path class="mb4eqwb3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chef-knife-20-bold"} {...others} />);
}

export default Component;

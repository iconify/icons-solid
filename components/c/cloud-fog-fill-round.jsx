import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgd96-8ux.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kgd96-8ux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cloud-fog-fill-round"} {...others} />);
}

export default Component;

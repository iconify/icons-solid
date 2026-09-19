import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/es10opblc.css';

const viewBox = {"width":18,"height":24};
const content = `<path class="es10opblc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:pinterest"} {...others} />);
}

export default Component;

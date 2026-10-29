import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mt8f7bcaz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mt8f7bcaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rabbit-solid"} {...others} />);
}

export default Component;

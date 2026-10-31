import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cao1pl0kz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cao1pl0kz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:accessibility-round"} {...others} />);
}

export default Component;

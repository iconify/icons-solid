import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed-kn0bym.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ed-kn0bym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shield-minus-fill-round"} {...others} />);
}

export default Component;

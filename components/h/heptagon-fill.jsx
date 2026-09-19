import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_b0f49ap.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_b0f49ap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:heptagon-fill"} {...others} />);
}

export default Component;

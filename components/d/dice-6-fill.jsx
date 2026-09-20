import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0u167zly.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l0u167zly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:dice-6-fill"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4r1u1cta.css';
import '../../css/k/kmh9fqkcc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t4r1u1cta"/><path class="kmh9fqkcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:qtum"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kd3phbbok.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kd3phbbok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:align-horizontal-distribute-center"} {...others} />);
}

export default Component;

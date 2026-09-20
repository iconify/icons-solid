import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e65-adcad.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e65-adcad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-rainbow-outline"} {...others} />);
}

export default Component;

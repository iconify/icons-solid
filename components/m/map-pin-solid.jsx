import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2r8k2b1x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d2r8k2b1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:map-pin-solid"} {...others} />);
}

export default Component;

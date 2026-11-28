import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aupjr3o0t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aupjr3o0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:camera-solid"} {...others} />);
}

export default Component;

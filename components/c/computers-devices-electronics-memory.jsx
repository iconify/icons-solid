import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqwdx_ben.css';
import '../../css/y/y_fuh3bha.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mqwdx_ben"/><path class="y_fuh3bha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:computers-devices-electronics-memory"} {...others} />);
}

export default Component;

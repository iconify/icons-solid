import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5z6yebzw.css';
import '../../css/i/i9as8va8e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h5z6yebzw"/><path class="i9as8va8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:car-sparkles"} {...others} />);
}

export default Component;

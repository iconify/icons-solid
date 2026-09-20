import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g307o3kzp.css';
import '../../css/u/ubccq2blx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g307o3kzp"/><path class="ubccq2blx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sofe"} {...others} />);
}

export default Component;

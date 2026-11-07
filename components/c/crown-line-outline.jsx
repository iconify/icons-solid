import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fvamu-4ox.css';
import '../../css/c/c_eh8tc1z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fvamu-4ox"/><path clip-rule="evenodd" class="c_eh8tc1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:crown-line-outline"} {...others} />);
}

export default Component;

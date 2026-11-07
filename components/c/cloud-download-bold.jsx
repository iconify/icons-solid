import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zyax-g3ph.css';
import '../../css/j/jik0uqbax.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zyax-g3ph"/><path class="jik0uqbax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-download-bold"} {...others} />);
}

export default Component;

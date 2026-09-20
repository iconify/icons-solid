import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqbv1hb3a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vqbv1hb3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:full-screen-square-outline"} {...others} />);
}

export default Component;

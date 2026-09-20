import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/muybtqbir.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-6};
const content = `<path class="muybtqbir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:background-color"} {...others} />);
}

export default Component;

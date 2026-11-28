import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdo3n1bae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mdo3n1bae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:hexagon-three-quarter-solid"} {...others} />);
}

export default Component;

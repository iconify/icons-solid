import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-a3n1cad.css';

const viewBox = {"width":961,"height":960};
const content = `<path class="z-a3n1cad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:dominoeight"} {...others} />);
}

export default Component;

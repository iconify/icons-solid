import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5ecrqbyu.css';

const viewBox = {"width":602.362,"height":131.705};
const content = `<path class="p5ecrqbyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lexus"} {...others} />);
}

export default Component;

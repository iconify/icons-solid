import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjqwoqbfe.css';
import '../../css/f/fxdh-t-8i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pjqwoqbfe"/><path class="fxdh-t-8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:italic-20"} {...others} />);
}

export default Component;

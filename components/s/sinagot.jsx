import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjwe_m-4t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cjwe_m-4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:sinagot"} {...others} />);
}

export default Component;

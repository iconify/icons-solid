import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuo09szyx.css';

const viewBox = {"width":21,"height":28};
const content = `<path clip-rule="evenodd" class="cuo09szyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lemon-squeezy"} {...others} />);
}

export default Component;

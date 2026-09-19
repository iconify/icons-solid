import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcgzi08rj.css';

const viewBox = {"width":416,"height":488};
const content = `<path class="kcgzi08rj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:bebo"} {...others} />);
}

export default Component;

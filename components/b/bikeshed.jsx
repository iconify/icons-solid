import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0ldy-bsh.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="l0ldy-bsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:bikeshed"} {...others} />);
}

export default Component;

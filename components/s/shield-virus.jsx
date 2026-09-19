import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mm2r5tcxu.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="mm2r5tcxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:shield-virus"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg59v6okj.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="mg59v6okj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:square-phone-flip"} {...others} />);
}

export default Component;

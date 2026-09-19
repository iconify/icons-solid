import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hr3a5n0ia.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="hr3a5n0ia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:earlybirds"} {...others} />);
}

export default Component;

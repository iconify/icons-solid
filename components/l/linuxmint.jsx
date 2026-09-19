import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6b-ou0ik.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="m6b-ou0ik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:linuxmint"} {...others} />);
}

export default Component;

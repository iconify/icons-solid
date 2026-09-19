import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3y_m2brn.css';

const viewBox = {"width":128,"height":128};
const content = `<path clip-rule="evenodd" class="h3y_m2brn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:rails"} {...others} />);
}

export default Component;

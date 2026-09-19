import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3cll2epf.css';
import '../../css/w/w-wp2mbeb.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="u3cll2epf"/><path class="w-wp2mbeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:typescript"} {...others} />);
}

export default Component;

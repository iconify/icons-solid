import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2gnuus1q.css';
import '../../css/u/uvu1bzkib.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="u2gnuus1q"/><path class="uvu1bzkib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:swift"} {...others} />);
}

export default Component;

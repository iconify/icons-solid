import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3asnubuj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c3asnubuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:arrow-downward-outline"} {...others} />);
}

export default Component;

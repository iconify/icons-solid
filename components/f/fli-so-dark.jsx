import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc_a9dblh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bc_a9dblh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fli-so-dark"} {...others} />);
}

export default Component;

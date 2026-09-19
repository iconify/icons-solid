import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kj7pqvbdz.css';
import '../../css/s/s0pa6pmmf.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="kj7pqvbdz"/><path class="s0pa6pmmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:first-aid-kit-line"} {...others} />);
}

export default Component;

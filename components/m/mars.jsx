import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3kpo5i1h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l3kpo5i1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:mars"} {...others} />);
}

export default Component;

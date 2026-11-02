import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3z3wno2a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g3z3wno2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:drop-2-fill"} {...others} />);
}

export default Component;

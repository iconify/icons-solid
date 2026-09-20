import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofo4tbb3m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ofo4tbb3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:clapperboard-fill"} {...others} />);
}

export default Component;

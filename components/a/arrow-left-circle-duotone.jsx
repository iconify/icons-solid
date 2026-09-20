import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in1dviszv.css';
import '../../css/t/tqg7p7b5b.css';
import '../../css/p/pqzescb_s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="in1dviszv"><path class="tqg7p7b5b"/><path class="pqzescb_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:arrow-left-circle-duotone"} {...others} />);
}

export default Component;

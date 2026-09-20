import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in1dviszv.css';
import '../../css/h/hiqsv9b4b.css';
import '../../css/o/ob8mo8phv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="in1dviszv"><path class="hiqsv9b4b"/><path class="ob8mo8phv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:lock-muted-duotone"} {...others} />);
}

export default Component;

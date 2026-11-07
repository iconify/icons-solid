import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzprmcg0c.css';
import '../../css/o/otqm0acos.css';
import '../../css/o/oaa-h-w6m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gzprmcg0c"/><path class="otqm0acos"/><path class="oaa-h-w6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-vertical-bold-duotone"} {...others} />);
}

export default Component;

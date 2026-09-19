import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ggiu84btg.css';
import '../../css/d/do6vm3bai.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ggiu84btg"/><path class="do6vm3bai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:map-bookmark"} {...others} />);
}

export default Component;

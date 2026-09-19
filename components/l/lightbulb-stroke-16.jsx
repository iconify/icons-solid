import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/yuyr5dx8j.css';
import '../../css/i/i4cp03b1y.css';
import '../../css/v/va_yq2bao.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><path class="yuyr5dx8j"/><path class="i4cp03b1y"/></g><path class="va_yq2bao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:lightbulb-stroke-16"} {...others} />);
}

export default Component;

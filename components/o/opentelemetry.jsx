import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5is1to6c.css';
import '../../css/u/ud1-bgmma.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r5is1to6c"/><path class="ud1-bgmma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:opentelemetry"} {...others} />);
}

export default Component;

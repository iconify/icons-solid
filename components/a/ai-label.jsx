import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dy8f-purm.css';
import '../../css/v/v__h0hbug.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dy8f-purm"/><path class="v__h0hbug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ai-label"} {...others} />);
}

export default Component;

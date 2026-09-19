import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kb4s33bah.css';
import '../../css/r/rtki51b4a.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kb4s33bah"/><path class="rtki51b4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:vehicle-connected"} {...others} />);
}

export default Component;

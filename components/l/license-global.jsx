import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ob0wpqbjp.css';
import '../../css/h/h_4w4ru8f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ob0wpqbjp"/><path class="h_4w4ru8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:license-global"} {...others} />);
}

export default Component;

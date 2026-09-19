import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7_ef0bll.css';
import '../../css/w/ww0v738xa.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b7_ef0bll"/><path class="ww0v738xa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:operation-gauge"} {...others} />);
}

export default Component;

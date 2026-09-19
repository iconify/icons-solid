import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksnpplbgb.css';
import '../../css/l/l6uihqb0x.css';
import '../../css/l/l5hse2boy.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="ksnpplbgb"/><path class="l6uihqb0x"/><path class="l5hse2boy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:content-view"} {...others} />);
}

export default Component;

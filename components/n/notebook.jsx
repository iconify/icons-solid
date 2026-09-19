import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mb1xkjbuo.css';
import '../../css/y/yg7xgph3p.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="mb1xkjbuo"/><path class="yg7xgph3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:notebook"} {...others} />);
}

export default Component;

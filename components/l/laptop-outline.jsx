import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z58ye-npm.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="z58ye-npm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:laptop-outline"} {...others} />);
}

export default Component;

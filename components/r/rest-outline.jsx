import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8m-_-bks.css';
import '../../css/j/juspnkb0e.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="a8m-_-bks"/><path class="juspnkb0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:rest-outline"} {...others} />);
}

export default Component;

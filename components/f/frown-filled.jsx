import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhxhmzp8y.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="nhxhmzp8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:frown-filled"} {...others} />);
}

export default Component;

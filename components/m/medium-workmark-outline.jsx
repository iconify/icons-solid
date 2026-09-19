import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emn7phbbs.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="emn7phbbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:medium-workmark-outline"} {...others} />);
}

export default Component;

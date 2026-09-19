import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3jb4gb8z.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="j3jb4gb8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:eleven-labs-filled"} {...others} />);
}

export default Component;

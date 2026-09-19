import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljaw0iz7g.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ljaw0iz7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:kubernetes-outlined"} {...others} />);
}

export default Component;

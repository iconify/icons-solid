import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prjy8z40i.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="prjy8z40i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:warning-fill"} {...others} />);
}

export default Component;

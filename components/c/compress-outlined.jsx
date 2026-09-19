import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aty5o6b6r.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="aty5o6b6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:compress-outlined"} {...others} />);
}

export default Component;

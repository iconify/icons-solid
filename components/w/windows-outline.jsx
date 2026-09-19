import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ump_5_t_k.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ump_5_t_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:windows-outline"} {...others} />);
}

export default Component;

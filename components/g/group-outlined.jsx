import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h66-yoa9l.css';
import '../../css/w/w-bvnpfvp.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="h66-yoa9l"/><path class="w-bvnpfvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:group-outlined"} {...others} />);
}

export default Component;

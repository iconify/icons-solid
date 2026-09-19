import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6i7a1tli.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="s6i7a1tli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:netflix-filled"} {...others} />);
}

export default Component;

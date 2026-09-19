import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h482tac2h.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="h482tac2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:tablet-filled"} {...others} />);
}

export default Component;

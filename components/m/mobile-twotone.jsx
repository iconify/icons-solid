import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0vdt7_4y.css';
import '../../css/z/zgf90ac7u.css';
import '../../css/v/vaqg0pb0u.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="o0vdt7_4y"/><path class="zgf90ac7u"/><path class="vaqg0pb0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:mobile-twotone"} {...others} />);
}

export default Component;

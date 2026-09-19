import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7hkp6x0o.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="k7hkp6x0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:diff-filled"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfy7vkm7h.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="gfy7vkm7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:html5-filled"} {...others} />);
}

export default Component;

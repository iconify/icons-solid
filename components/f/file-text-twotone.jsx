import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y01e7fbft.css';
import '../../css/j/jso3jy2en.css';
import '../../css/s/sve582cmp.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="y01e7fbft"/><path class="jso3jy2en"/><path class="sve582cmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:file-text-twotone"} {...others} />);
}

export default Component;

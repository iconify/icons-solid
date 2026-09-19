import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ux_5wvris.css';
import '../../css/j/jso3jy2en.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ux_5wvris"/><path class="jso3jy2en"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:file-twotone"} {...others} />);
}

export default Component;

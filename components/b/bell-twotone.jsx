import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1b1abbxl.css';
import '../../css/e/eoz47dboi.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="j1b1abbxl"/><path class="eoz47dboi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:bell-twotone"} {...others} />);
}

export default Component;

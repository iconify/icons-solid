import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxf74wbaz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zxf74wbaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:fire-extinguisher"} {...others} />);
}

export default Component;

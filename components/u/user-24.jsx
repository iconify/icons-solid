import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r86igdcpy.css';
import '../../css/z/zqwnycjqz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r86igdcpy"/><path clip-rule="evenodd" class="zqwnycjqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:user-24"} {...others} />);
}

export default Component;

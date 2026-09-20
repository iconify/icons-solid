import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-u7i6rxl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z-u7i6rxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:paint-brush"} {...others} />);
}

export default Component;

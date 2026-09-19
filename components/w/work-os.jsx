import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bk6x0-gcj.css';
import '../../css/j/jw9a98ysj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bk6x0-gcj"/><path class="jw9a98ysj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:work-os"} {...others} />);
}

export default Component;

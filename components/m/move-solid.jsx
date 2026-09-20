import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zoa16p8ga.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zoa16p8ga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:move-solid"} {...others} />);
}

export default Component;

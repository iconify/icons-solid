import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncg4ydbbh.css';
import '../../css/r/r2vjdgbir.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ncg4ydbbh"/><path class="r2vjdgbir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-django"} {...others} />);
}

export default Component;

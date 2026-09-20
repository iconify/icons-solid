import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vzxol0-lj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vzxol0-lj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:horn-line"} {...others} />);
}

export default Component;

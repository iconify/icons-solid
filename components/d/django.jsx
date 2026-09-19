import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lq-azk5il.css';
import '../../css/z/zu7-jfbfz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lq-azk5il"/><path class="zu7-jfbfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:django"} {...others} />);
}

export default Component;

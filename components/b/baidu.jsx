import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qcznqro8c.css';
import '../../css/g/gsn7st_me.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qcznqro8c"/><path class="gsn7st_me"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:baidu"} {...others} />);
}

export default Component;

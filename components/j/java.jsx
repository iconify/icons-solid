import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9wzlccqg.css';
import '../../css/o/oa7pg3bad.css';
import '../../css/l/luya6x6cn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p9wzlccqg"/><path class="oa7pg3bad"/><path class="luya6x6cn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:java"} {...others} />);
}

export default Component;

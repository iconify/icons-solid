import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l18em4bxj.css';
import '../../css/t/ts9-onmui.css';
import '../../css/r/rkzw689zh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l18em4bxj"/><path class="ts9-onmui"/><path class="rkzw689zh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:data-science"} {...others} />);
}

export default Component;
